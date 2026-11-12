/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotConfig, GroupConfig, WhatsAppSessionInfo } from '../core/types.ts';

class StorageStore {
  private startTime: number = Date.now();

  public config: BotConfig = {
    name: 'Freya-san bot by Pak Ujan',
    prefix: '/',
    ownerNumber: '6281234567890',
    ownerName: 'Pak Ujan',
    defaultCooldown: 3,
    aiModel: 'gemini-2.5-flash',
    welcomeEnabled: true,
    welcomeMessage: 'Halo selamat datang di grup! Perkenalkan dirimu dan patuhi peraturan grup ya ✨',
    antilinkEnabled: true,
    autoRead: false,
    selfMode: false,
  };

  public groups: Map<string, GroupConfig> = new Map([
    [
      '120363012345678@g.us',
      {
        id: '120363012345678@g.us',
        name: '48Group Fans Indonesia 🌸',
        welcome: true,
        antilink: true,
        mute: false,
        rules: '1. No spam link\n2. Saling menghormati sesama fans\n3. Jangan toxic',
      },
    ],
    [
      '120363098765432@g.us',
      {
        id: '120363098765432@g.us',
        name: 'Wota & Oshi Discussion',
        welcome: true,
        antilink: false,
        mute: false,
        rules: '1. Diskusi santai seputar theater, senbatsu, dan sousenkyo.',
      },
    ],
  ]);

  public sessionInfo: WhatsAppSessionInfo = {
    status: 'DISCONNECTED',
    connectedPhone: null,
    pushName: null,
    qrCodeDataUrl: null,
    pairingCode: null,
    lastConnectedAt: null,
    reconnectAttempts: 0,
    batteryLevel: 94,
  };

  public getUptimeSeconds(): number {
    return Math.floor((Date.now() - this.startTime) / 1000);
  }

  public getFormattedUptime(): string {
    const total = this.getUptimeSeconds();
    const days = Math.floor(total / (3600 * 24));
    const hours = Math.floor((total % (3600 * 24)) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} Hari`);
    if (hours > 0) parts.push(`${hours} Jam`);
    if (minutes > 0) parts.push(`${minutes} Menit`);
    parts.push(`${seconds} Detik`);

    return parts.join(' ');
  }

  public updateConfig(newConfig: Partial<BotConfig>): BotConfig {
    this.config = { ...this.config, ...newConfig };
    return this.config;
  }

  public getGroup(id: string): GroupConfig | undefined {
    return this.groups.get(id);
  }

  public updateGroup(id: string, update: Partial<GroupConfig>): GroupConfig {
    const current = this.groups.get(id) || {
      id,
      name: 'WhatsApp Group',
      welcome: true,
      antilink: true,
      mute: false,
      rules: 'Patuhi aturan grup.',
    };
    const updated = { ...current, ...update };
    this.groups.set(id, updated);
    return updated;
  }

  public getAllGroups(): GroupConfig[] {
    return Array.from(this.groups.values());
  }

  public createBackupJSON(): string {
    return JSON.stringify(
      {
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        config: this.config,
        groups: Array.from(this.groups.entries()),
      },
      null,
      2
    );
  }

  public restoreBackupJSON(jsonStr: string): boolean {
    try {
      const data = JSON.parse(jsonStr);
      if (data.config) {
        this.config = { ...this.config, ...data.config };
      }
      if (Array.isArray(data.groups)) {
        this.groups = new Map(data.groups);
      }
      return true;
    } catch {
      return false;
    }
  }
}

export const store = new StorageStore();
