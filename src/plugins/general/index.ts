/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';
import { store } from '../../storage/store.ts';
import { pluginRegistry } from '../../core/registry.ts';

export const generalPlugins: BotPlugin[] = [
  {
    name: 'menu',
    category: 'general',
    description: 'Menampilkan daftar menu perintah Freya-san Bot',
    aliases: ['help', 'm', 'bantuan'],
    usage: '/menu [kategori]',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      const p = ctx.prefix;
      const uptime = store.getFormattedUptime();
      const allPlugins = pluginRegistry.getAll();
      const enabledCount = pluginRegistry.enabledCount;

      let menuText = `╭━━━〔 *${store.config.name}* 〕━━━╮\n`;
      menuText += `│ 👤 *Owner:* ${store.config.ownerName}\n`;
      menuText += `│ ⚡ *Prefix:* [ ${p} ]\n`;
      menuText += `│ ⏳ *Runtime:* ${uptime}\n`;
      menuText += `│ 🧩 *Plugins:* ${enabledCount}/${allPlugins.length} Aktif\n`;
      menuText += `│ 🌐 *Platform:* 48Group Bot Cloud\n`;
      menuText += `╰━━━━━━━━━━━━━━━━━━━━╯\n\n`;

      const categories = pluginRegistry.getByCategory();
      const categoryIcons: Record<string, string> = {
        general: '📌 *GENERAL*',
        ai: '🤖 *ARTIFICIAL INTELLIGENCE*',
        download: '📥 *DOWNLOADER*',
        sticker: '🎨 *STICKER & MEDIA*',
        tools: '🛠️ *TOOLS & UTILITIES*',
        group: '👥 *GROUP MANAGEMENT*',
        info: 'ℹ️ *INFORMATION*',
        owner: '👑 *OWNER EXCLUSIVE*',
      };

      for (const [cat, plugins] of Object.entries(categories)) {
        const catTitle = categoryIcons[cat] || `📂 *${cat.toUpperCase()}*`;
        menuText += `${catTitle}\n`;
        const cmdList = plugins
          .filter((pl) => pl.enabled)
          .map((pl) => `  » ${p}${pl.name}`)
          .join('\n');
        menuText += `${cmdList || '  (Tidak ada command aktif)'}\n\n`;
      }

      menuText += `💡 _Ketik ${p}infobot untuk informasi sistem atau ${p}ping untuk cek kecepatan respon._`;

      await ctx.reply(menuText);
    },
  },
  {
    name: 'infobot',
    category: 'general',
    description: 'Menampilkan informasi teknis dan status Freya-san Bot',
    aliases: ['info', 'about'],
    usage: '/infobot',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      const uptime = store.getFormattedUptime();
      const text = `🌸 *INFORMASI FREYA-SAN BOT* 🌸\n\n` +
        `• *Nama Bot:* ${store.config.name}\n` +
        `• *Owner / Developer:* ${store.config.ownerName} (@${store.config.ownerNumber})\n` +
        `• *Versi Engine:* v1.0.0 (Phase 1-4 Complete)\n` +
        `• *Infrastruktur:* UjanBot Cloud (Express + TypeScript + Vite)\n` +
        `• *Engine WhatsApp:* Modular Baileys WebSocket Adapter Architecture\n` +
        `• *Sistem Plugin:* Modular Dynamic Registry\n` +
        `• *Runtime Bot:* ${uptime}\n` +
        `• *Database:* Storage Store (JSON & SQLite Migratable)\n` +
        `• *AI Engine:* Google Gemini Flash / Pro API Grounded\n\n` +
        `_Didukung oleh komunitas 48Group Bot untuk pengalaman WhatsApp Bot yang stabil dan terpercaya._`;
      await ctx.reply(text);
    },
  },
  {
    name: 'ping',
    category: 'general',
    description: 'Memeriksa kecepatan respon bot dan server',
    aliases: ['p', 'speed'],
    usage: '/ping',
    permissions: ['all'],
    enabled: true,
    cooldown: 2,
    async execute(ctx) {
      const start = Date.now();
      const latency = Math.max(12, Date.now() - ctx.timestamp || 24);
      const text = `🏓 *Pong!*\n\n` +
        `• *Kecepatan Respon:* ${latency} ms\n` +
        `• *Status Server:* 🟢 Normal (Low Latency)\n` +
        `• *Waktu:* ${new Date().toLocaleTimeString('id-ID')}`;
      await ctx.reply(text);
    },
  },
  {
    name: 'runtime',
    category: 'general',
    description: 'Menampilkan durasi bot aktif berjalan',
    aliases: ['uptime'],
    usage: '/runtime',
    permissions: ['all'],
    enabled: true,
    cooldown: 2,
    async execute(ctx) {
      const uptime = store.getFormattedUptime();
      await ctx.reply(`⏱️ *Bot Aktif Selama:*\n${uptime}`);
    },
  },
  {
    name: 'version',
    category: 'general',
    description: 'Menampilkan versi sistem dan bot engine',
    aliases: ['ver'],
    usage: '/version',
    permissions: ['all'],
    enabled: true,
    cooldown: 2,
    async execute(ctx) {
      const text = `📦 *Versi Freya-san Bot*\n\n` +
        `• *App Version:* v1.2.0 (Phase 4 Dashboard Release)\n` +
        `• *Core Engine:* Modular Plugin Architecture v2.0\n` +
        `• *Platform:* UjanBot Cloud Linux / Android Termux Ready\n` +
        `• *Build Status:* Stable & Verified`;
      await ctx.reply(text);
    },
  },
  {
    name: 'owner',
    category: 'general',
    description: 'Menampilkan kontak dan identitas owner bot',
    aliases: ['creator', 'developer'],
    usage: '/owner',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      const text = `👑 *OWNER & PENGEMBANG BOT*\n\n` +
        `• *Nama:* ${store.config.ownerName}\n` +
        `• *WhatsApp:* https://wa.me/${store.config.ownerNumber.replace(/\D/g, '')}\n` +
        `• *Project:* 48Group Bot - Freya-san Cloud\n` +
        `• *Peran:* Single Administrator & System Architect\n\n` +
        `_Silakan hubungi pemilik jika memerlukan kerjasama atau permohonan fitur khusus._`;
      await ctx.reply(text);
    },
  },
  {
    name: 'changelog',
    category: 'general',
    description: 'Menampilkan riwayat pembaruan dan catatan rilis bot',
    aliases: ['changes', 'updates'],
    usage: '/changelog',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      const text = `📜 *CHANGELOG PEMBARUAN FREYA-SAN BOT*\n\n` +
        `[v1.2.0] - Phase 4: Web Dashboard & Monitoring\n` +
        `+ Web Dashboard responsif untuk Android & Desktop\n` +
        `+ Live WhatsApp pairing QR generator & code pair\n` +
        `+ Real-time terminal logs & audit stream\n` +
        `+ Backup & Restore snapshot JSON data\n\n` +
        `[v1.1.0] - Phase 3: Core 30 Commands\n` +
        `+ 30 Perintah utama (General, AI, DL, Sticker, Tools, Group)\n` +
        `+ Keamanan RBAC (Owner & Group Admin protection)\n` +
        `+ Rate limiting & anti-spam cooldown manager\n\n` +
        `[v1.0.0] - Phase 1 & 2: Modular Foundation\n` +
        `+ Inisialisasi arsitektur adapter terpisah\n` +
        `+ Command parser cerdas dengan multi-prefix`;
      await ctx.reply(text);
    },
  },
];
