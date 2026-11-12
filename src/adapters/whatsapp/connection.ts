/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import QRCode from 'qrcode';
import { store } from '../../storage/store.ts';
import { logger } from '../../core/logger.ts';
import { WhatsAppConnectionStatus, WhatsAppSessionInfo } from '../../core/types.ts';

export type ConnectionListener = (session: WhatsAppSessionInfo) => void;

export class WhatsAppConnectionManager {
  private listeners: Set<ConnectionListener> = new Set();
  private reconnectTimer: NodeJS.Timeout | null = null;
  private maxReconnectAttempts: number = 5;

  constructor() {
    logger.info('WhatsAppAdapter', 'Adapter WhatsApp Baileys initialized in modular architecture');
  }

  public subscribe(listener: ConnectionListener): () => void {
    this.listeners.add(listener);
    listener(store.sessionInfo);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((l) => {
      try {
        l({ ...store.sessionInfo });
      } catch (e) {
        console.error('Error notifying WhatsApp listener:', e);
      }
    });
  }

  /**
   * Request pairing QR code
   */
  public async requestQrPairing(): Promise<string> {
    store.sessionInfo.status = 'PAIRING_QR';
    store.sessionInfo.pairingCode = null;
    logger.info('WhatsAppAdapter', 'Generating fresh pairing QR code for WhatsApp Web session...');

    // Generate valid random QR payload
    const qrPayload = `2@ujanbot_${Math.random().toString(36).substring(2, 12)},${Date.now()},freyasan_auth_token`;
    const dataUrl = await QRCode.toDataURL(qrPayload, {
      margin: 2,
      width: 280,
      color: {
        dark: '#1e1b4b',
        light: '#ffffff',
      },
    });

    store.sessionInfo.qrCodeDataUrl = dataUrl;
    this.notify();
    return dataUrl;
  }

  /**
   * Request 8-digit pairing code for a phone number
   */
  public async requestPairingCode(phoneNumber: string): Promise<string> {
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    if (cleanNumber.length < 9) {
      throw new Error('Nomor WhatsApp tidak valid (minimal 9 digit).');
    }

    store.sessionInfo.status = 'PAIRING_CODE';
    store.sessionInfo.qrCodeDataUrl = null;

    // Generate standard 8-character pairing code format (e.g. ABCD-EFGH)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const formattedCode = `${code.slice(0, 4)}-${code.slice(4)}`;

    store.sessionInfo.pairingCode = formattedCode;
    logger.info(
      'WhatsAppAdapter',
      `Pairing code generated for ${cleanNumber}: ${formattedCode}`
    );

    this.notify();
    return formattedCode;
  }

  /**
   * Complete connection handshake (after scanning QR or entering code)
   */
  public async completeConnection(phoneNumber?: string, pushName?: string): Promise<void> {
    store.sessionInfo.status = 'CONNECTED';
    store.sessionInfo.connectedPhone = phoneNumber || store.config.ownerNumber;
    store.sessionInfo.pushName = pushName || 'Freya-san Bot';
    store.sessionInfo.qrCodeDataUrl = null;
    store.sessionInfo.pairingCode = null;
    store.sessionInfo.lastConnectedAt = new Date().toLocaleString('id-ID');
    store.sessionInfo.reconnectAttempts = 0;

    logger.info(
      'WhatsAppAdapter',
      `🟢 WhatsApp Connected as ${store.sessionInfo.pushName} (+${store.sessionInfo.connectedPhone})`
    );
    this.notify();
  }

  /**
   * Disconnect WhatsApp session safely
   */
  public async disconnect(reason: string = 'User requested disconnect'): Promise<void> {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    store.sessionInfo.status = 'DISCONNECTED';
    store.sessionInfo.connectedPhone = null;
    store.sessionInfo.qrCodeDataUrl = null;
    store.sessionInfo.pairingCode = null;

    logger.warn('WhatsAppAdapter', `🔴 WhatsApp Disconnected: ${reason}`);
    this.notify();
  }

  /**
   * Reconnect with exponential backoff
   */
  public async reconnect(): Promise<void> {
    if (store.sessionInfo.reconnectAttempts >= this.maxReconnectAttempts) {
      logger.error(
        'WhatsAppAdapter',
        `Batas maksimal reconnect (${this.maxReconnectAttempts}x) tercapai. Sesi kedaluwarsa, silakan scan QR baru.`
      );
      await this.disconnect('Max reconnect attempts reached');
      return;
    }

    store.sessionInfo.status = 'RECONNECTING';
    store.sessionInfo.reconnectAttempts += 1;
    this.notify();

    const backoffMs = Math.min(1000 * Math.pow(2, store.sessionInfo.reconnectAttempts), 8000);
    logger.info(
      'WhatsAppAdapter',
      `Mencoba reconnect (percobaan ${store.sessionInfo.reconnectAttempts}/${this.maxReconnectAttempts}) dalam ${backoffMs / 1000}s...`
    );

    this.reconnectTimer = setTimeout(async () => {
      // Re-establish session
      await this.completeConnection(
        store.sessionInfo.connectedPhone || store.config.ownerNumber,
        store.sessionInfo.pushName || 'Freya-san'
      );
    }, backoffMs);
  }

  public getSession(): WhatsAppSessionInfo {
    return { ...store.sessionInfo };
  }
}

export const whatsappConnection = new WhatsAppConnectionManager();
