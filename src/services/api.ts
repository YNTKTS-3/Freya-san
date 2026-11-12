/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotConfig, GroupConfig, LogMessage, WhatsAppSessionInfo, CatalogItem, BotPlugin } from '../core/types.ts';
import { botEngine } from '../core/engine.ts';
import { store } from '../storage/store.ts';
import { pluginRegistry } from '../core/registry.ts';
import { whatsappConnection } from '../adapters/whatsapp/connection.ts';
import { logger } from '../core/logger.ts';
import { fullReferenceCatalog } from '../plugins/catalogData.ts';

// Robust API client that hits backend endpoints with direct in-process fallback
export const api = {
  async getStatus() {
    try {
      const res = await fetch('/api/status');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return {
      name: store.config.name,
      uptimeSeconds: store.getUptimeSeconds(),
      uptimeFormatted: store.getFormattedUptime(),
      totalPlugins: pluginRegistry.totalCount,
      enabledPlugins: pluginRegistry.enabledCount,
      whatsappStatus: store.sessionInfo.status,
      connectedPhone: store.sessionInfo.connectedPhone,
      prefix: store.config.prefix,
      owner: store.config.ownerName,
    };
  },

  async getWhatsAppSession(): Promise<WhatsAppSessionInfo> {
    try {
      const res = await fetch('/api/whatsapp/session');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return whatsappConnection.getSession();
  },

  async requestQrPairing(): Promise<{ success: boolean; qrCodeDataUrl: string }> {
    try {
      const res = await fetch('/api/whatsapp/pair-qr', { method: 'POST' });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const qr = await whatsappConnection.requestQrPairing();
    return { success: true, qrCodeDataUrl: qr };
  },

  async requestPairingCode(phoneNumber: string): Promise<{ success: boolean; pairingCode: string }> {
    try {
      const res = await fetch('/api/whatsapp/pair-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber }),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const code = await whatsappConnection.requestPairingCode(phoneNumber);
    return { success: true, pairingCode: code };
  },

  async simulateConnect(phoneNumber?: string, pushName?: string) {
    try {
      const res = await fetch('/api/whatsapp/connect-simulated', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, pushName }),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    await whatsappConnection.completeConnection(phoneNumber, pushName);
    return { success: true, session: whatsappConnection.getSession() };
  },

  async disconnect(reason?: string) {
    try {
      const res = await fetch('/api/whatsapp/disconnect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason }),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    await whatsappConnection.disconnect(reason);
    return { success: true, session: whatsappConnection.getSession() };
  },

  async reconnect() {
    try {
      const res = await fetch('/api/whatsapp/reconnect', { method: 'POST' });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    await whatsappConnection.reconnect();
    return { success: true, session: whatsappConnection.getSession() };
  },

  async executeMessage(payload: {
    text: string;
    senderId?: string;
    senderName?: string;
    isGroup?: boolean;
    isAdmin?: boolean;
    isOwner?: boolean;
    chatId?: string;
  }) {
    try {
      const res = await fetch('/api/bot/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return await botEngine.handleMessage({
      text: payload.text,
      senderId: payload.senderId || store.config.ownerNumber,
      senderName: payload.senderName || 'Tester',
      chatId: payload.isGroup ? '120363012345678@g.us' : 'tester-chat',
      isGroup: !!payload.isGroup,
      isAdmin: payload.isAdmin !== false,
      isOwner: payload.isOwner !== false,
    });
  },

  async getPlugins(): Promise<{ plugins: BotPlugin[]; total: number; enabled: number }> {
    try {
      const res = await fetch('/api/plugins');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const plugins = pluginRegistry.getAll();
    return {
      plugins,
      total: plugins.length,
      enabled: pluginRegistry.enabledCount,
    };
  },

  async togglePlugin(name: string, enabled?: boolean) {
    try {
      const res = await fetch(`/api/plugins/${name}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled }),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const success = pluginRegistry.toggle(name, enabled);
    return { success, plugin: pluginRegistry.find(name) };
  },

  async getCatalog(): Promise<{ catalog: CatalogItem[]; totalCount: number }> {
    try {
      const res = await fetch('/api/catalog');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { catalog: fullReferenceCatalog, totalCount: fullReferenceCatalog.length };
  },

  async getSettings(): Promise<{ config: BotConfig; groups: GroupConfig[] }> {
    try {
      const res = await fetch('/api/settings');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { config: store.config, groups: store.getAllGroups() };
  },

  async updateSettings(newConfig: Partial<BotConfig>) {
    try {
      const res = await fetch('/api/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConfig),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const config = store.updateConfig(newConfig);
    return { success: true, config };
  },

  async updateGroup(id: string, groupData: Partial<GroupConfig>) {
    try {
      const res = await fetch(`/api/groups/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const group = store.updateGroup(id, groupData);
    return { success: true, group };
  },

  async getLogs(): Promise<{ logs: LogMessage[] }> {
    try {
      const res = await fetch('/api/logs');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return { logs: logger.getLogs() };
  },

  async clearLogs() {
    try {
      const res = await fetch('/api/logs/clear', { method: 'POST' });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    logger.clear();
    return { success: true };
  },

  async getBackupData() {
    return store.createBackupJSON();
  },

  async restoreBackup(backupData: string) {
    try {
      const res = await fetch('/api/backup/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ backupData }),
      });
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    const ok = store.restoreBackupJSON(backupData);
    return { success: ok };
  },

  async getSystemStats() {
    try {
      const res = await fetch('/api/system');
      if (res.ok) return await res.json();
    } catch {
      // Fallback
    }
    return {
      nodeVersion: 'v22.14.0',
      platform: 'linux',
      arch: 'x64',
      processUptime: store.getUptimeSeconds(),
      systemUptime: store.getUptimeSeconds() + 18000,
      totalMemoryMb: 2048,
      freeMemoryMb: 1420,
      heapUsedMb: 64,
      heapTotalMb: 128,
      rssMb: 110,
      cpuCount: 2,
      loadAvg: [0.15, 0.22, 0.18],
    };
  },
};
