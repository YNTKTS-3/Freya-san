/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CommandCategory = 
  | 'general' 
  | 'ai' 
  | 'download' 
  | 'sticker' 
  | 'tools' 
  | 'group' 
  | 'info' 
  | 'owner' 
  | 'game' 
  | 'random' 
  | 'search' 
  | 'textmaker';

export type PermissionLevel = 'all' | 'group_admin' | 'owner' | 'bot_admin';

export type CommandStatus = 
  | 'PLANNED'
  | 'IN_DEVELOPMENT'
  | 'IMPLEMENTED'
  | 'TESTING'
  | 'TESTED'
  | 'NEEDS_SPECIFICATION'
  | 'NEEDS_API'
  | 'BLOCKED'
  | 'DEPRECATED';

export interface CommandContext {
  messageId: string;
  sender: {
    id: string;
    pushName: string;
    isOwner: boolean;
    isAdmin: boolean;
  };
  chatId: string;
  isGroup: boolean;
  groupMetadata?: {
    subject: string;
    participantsCount: number;
    botIsAdmin: boolean;
  };
  command: string;
  args: string[];
  argText: string;
  prefix: string;
  timestamp: number;
  quotedMessage?: {
    id: string;
    sender: string;
    text: string;
    hasMedia: boolean;
    mediaType?: 'image' | 'video' | 'audio' | 'sticker' | 'document';
  };
  reply: (text: string) => Promise<string>;
  replyMedia?: (mediaUrl: string, type: 'image' | 'video' | 'audio' | 'sticker' | 'document', caption?: string) => Promise<string>;
  react?: (emoji: string) => Promise<void>;
}

export interface BotPlugin {
  name: string;
  category: CommandCategory;
  description: string;
  aliases: string[];
  usage: string;
  permissions: PermissionLevel[];
  enabled: boolean;
  cooldown: number; // in seconds
  dependencies?: string[];
  apiRequirements?: string;
  status?: CommandStatus;
  isFree?: boolean;
  execute: (ctx: CommandContext) => Promise<void | string>;
}

export interface CatalogItem {
  id: string;
  originalName: string;
  name: string;
  category: CommandCategory;
  description: string;
  aliases: string[];
  status: CommandStatus;
  permissions: PermissionLevel[];
  usage?: string;
  parameters?: string;
  requiresApi?: boolean;
  apiProvider?: string;
  isFree?: boolean;
  securityRisk?: 'low' | 'medium' | 'high' | 'critical';
  blockedReason?: string;
  duplicateCount?: number;
  isDuplicate?: boolean;
  notes?: string;
}

export interface BotConfig {
  name: string;
  prefix: string;
  ownerNumber: string;
  ownerName: string;
  defaultCooldown: number;
  aiModel: string;
  welcomeEnabled: boolean;
  welcomeMessage: string;
  antilinkEnabled: boolean;
  autoRead: boolean;
  selfMode: boolean; // true = only owner, false = public
}

export type WhatsAppConnectionStatus = 
  | 'DISCONNECTED' 
  | 'CONNECTING' 
  | 'PAIRING_QR' 
  | 'PAIRING_CODE' 
  | 'CONNECTED' 
  | 'RECONNECTING';

export interface WhatsAppSessionInfo {
  status: WhatsAppConnectionStatus;
  connectedPhone: string | null;
  pushName: string | null;
  qrCodeDataUrl: string | null;
  pairingCode: string | null;
  lastConnectedAt: string | null;
  reconnectAttempts: number;
  batteryLevel: number | null;
}

export interface LogMessage {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'ERROR' | 'CMD';
  source: string;
  message: string;
  metadata?: Record<string, unknown>;
}

export interface GroupConfig {
  id: string;
  name: string;
  welcome: boolean;
  antilink: boolean;
  mute: boolean;
  rules: string;
}
