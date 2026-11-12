/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageParser } from './parser.ts';
import { pluginRegistry } from './registry.ts';
import { PermissionManager } from './permission.ts';
import { cooldownManager } from './cooldown.ts';
import { logger } from './logger.ts';
import { store } from '../storage/store.ts';
import { CommandContext } from './types.ts';
import { game48Engine } from '../services/game48/engine.ts';
import '../plugins/index.ts';

export interface IncomingMessagePayload {
  messageId?: string;
  senderId: string;
  senderName: string;
  chatId: string;
  isGroup: boolean;
  groupSubject?: string;
  participantsCount?: number;
  botIsAdmin?: boolean;
  isAdmin?: boolean;
  isOwner?: boolean;
  text: string;
  timestamp?: number;
  quotedMessage?: {
    id: string;
    sender: string;
    text: string;
    hasMedia: boolean;
    mediaType?: 'image' | 'video' | 'audio' | 'sticker' | 'document';
  };
}

export interface EngineResult {
  handled: boolean;
  replies: string[];
  error?: string;
}

export class BotEngine {
  /**
   * Main entry point for processing incoming WhatsApp messages
   */
  public async handleMessage(payload: IncomingMessagePayload): Promise<EngineResult> {
    const replies: string[] = [];
    const replyFn = async (text: string): Promise<string> => {
      replies.push(text);
      return text;
    };

    const isOwner =
      payload.isOwner ||
      payload.senderId.replace(/\D/g, '') === store.config.ownerNumber.replace(/\D/g, '');

    // Anti-link auto detection in groups
    if (payload.isGroup) {
      const groupConfig = store.getGroup(payload.chatId);
      const isAntilink = groupConfig ? groupConfig.antilink : store.config.antilinkEnabled;

      if (isAntilink && !payload.isAdmin && !isOwner) {
        if (/chat\.whatsapp\.com\/[a-zA-Z0-9]{20,}/i.test(payload.text)) {
          logger.warn(
            'Security',
            `Anti-link triggered in group ${payload.chatId} by ${payload.senderName}`
          );
          replies.push(
            `🛡️ *ANTI-LINK DETECTED!*\n\n` +
            `Dilarang mengirimkan link grup WhatsApp lain di grup ini!\n` +
            `@${payload.senderName}, pesan Anda telah melanggar aturan grup.`
          );
          return { handled: true, replies };
        }
      }
    }

    // Parse command
    const parsed = MessageParser.parse(payload.text, store.config.prefix);
    if (!parsed.isCommand) {
      // Check active game session in this chat
      const gameCheck = game48Engine.checkAnswer(
        payload.chatId,
        payload.senderId,
        payload.senderName,
        payload.text
      );
      if (gameCheck.isMatch && gameCheck.replyText) {
        replies.push(gameCheck.replyText);
        logger.cmd('GameEngine', `Jawaban kuis benar dari ${payload.senderName} di ${payload.chatId}`);
        return { handled: true, replies };
      }

      return { handled: false, replies: [] };
    }

    // Find plugin
    const plugin = pluginRegistry.find(parsed.commandName);
    if (!plugin) {
      // Optional helpful response if looks like intentional command
      return {
        handled: false,
        replies: [
          `❓ Perintah *"${store.config.prefix}${parsed.commandName}"* tidak ditemukan.\nKetik *${store.config.prefix}menu* untuk melihat daftar perintah yang tersedia.`,
        ],
      };
    }

    // Check enabled status
    if (!plugin.enabled) {
      const msg = `⚠️ Perintah *"${plugin.name}"* sedang dinonaktifkan oleh administrator bot.`;
      replies.push(msg);
      logger.info('Engine', `Command "${plugin.name}" ignored (disabled)`);
      return { handled: true, replies };
    }

    // Build context
    const ctx: CommandContext = {
      messageId: payload.messageId || Math.random().toString(36).substring(2, 10),
      sender: {
        id: payload.senderId,
        pushName: payload.senderName || 'User',
        isOwner,
        isAdmin: !!payload.isAdmin || isOwner,
      },
      chatId: payload.chatId,
      isGroup: payload.isGroup,
      groupMetadata: payload.isGroup
        ? {
            subject: payload.groupSubject || 'WhatsApp Group',
            participantsCount: payload.participantsCount || 20,
            botIsAdmin: payload.botIsAdmin !== false,
          }
        : undefined,
      command: parsed.commandName,
      args: parsed.args,
      argText: parsed.argText,
      prefix: parsed.prefix,
      timestamp: payload.timestamp || Date.now(),
      quotedMessage: payload.quotedMessage,
      reply: replyFn,
    };

    // Permission check
    const permResult = PermissionManager.check(ctx, plugin.permissions);
    if (!permResult.allowed) {
      const denialMsg = permResult.reason || '⚠️ Akses ditolak: Anda tidak memiliki izin untuk perintah ini.';
      replies.push(denialMsg);
      logger.warn('Permission', `User ${payload.senderId} denied access to ${plugin.name}`);
      return { handled: true, replies };
    }

    // Cooldown check
    const cdSeconds = plugin.cooldown || store.config.defaultCooldown;
    const cdCheck = cooldownManager.check(payload.senderId, plugin.name, cdSeconds, isOwner);
    if (cdCheck.onCooldown) {
      const waitMsg = `⏳ Mohon tunggu *${cdCheck.remainingSeconds} detik* sebelum menggunakan perintah *${plugin.name}* kembali.`;
      replies.push(waitMsg);
      return { handled: true, replies };
    }

    // Execution with safe error handling
    try {
      logger.cmd(
        'Engine',
        `Command [${plugin.name}] dipanggil oleh ${payload.senderName} (${payload.isGroup ? 'Grup' : 'Private'})`
      );
      await plugin.execute(ctx);
      return { handled: true, replies };
    } catch (err: unknown) {
      const errorStr = err instanceof Error ? err.message : String(err);
      logger.error('Engine', `Error saat eksekusi plugin ${plugin.name}: ${errorStr}`);
      replies.push(`❌ Terjadi kesalahan saat memproses perintah *${plugin.name}*:\n_${errorStr}_`);
      return { handled: true, replies, error: errorStr };
    }
  }
}

export const botEngine = new BotEngine();
