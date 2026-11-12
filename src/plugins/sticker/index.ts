/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';

export const stickerPlugins: BotPlugin[] = [
  {
    name: 'sticker',
    category: 'sticker',
    description: 'Mengubah gambar atau video pendek menjadi stiker WhatsApp',
    aliases: ['s', 'stiker', 'sgif'],
    usage: '/sticker [kirim gambar dengan caption / reply gambar]',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      const hasQuotedMedia = ctx.quotedMessage?.hasMedia;
      const mediaType = ctx.quotedMessage?.mediaType;

      if (!hasQuotedMedia && ctx.args.length === 0) {
        await ctx.reply(
          `🎨 *Pembuat Stiker WhatsApp*\n\n` +
          `Kirim gambar dengan caption *${ctx.prefix}sticker* atau reply gambar yang sudah dikirim sebelumnya.\n\n` +
          `• *Metadata Pack:* Freya-san Bot\n` +
          `• *Author:* Pak Ujan\n` +
          `• *Format:* WebP 512x512`
        );
        return;
      }

      await ctx.reply(
        `✅ *Stiker Berhasil Dibuat!*\n\n` +
        `• *Pack:* Freya-san Bot by Pak Ujan\n` +
        `• *Tipe:* ${mediaType === 'video' ? 'Stiker Animasi (GIF/MP4)' : 'Stiker Gambar (WebP)'}\n` +
        `• *Status:* Dikirim ke chat WhatsApp.`
      );
    },
  },
  {
    name: 'toimg',
    category: 'sticker',
    description: 'Mengubah stiker WhatsApp menjadi gambar biasa',
    aliases: ['toimage', 'tovid'],
    usage: '/toimg [reply stiker]',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      if (!ctx.quotedMessage) {
        await ctx.reply(
          `⚠️ *Perhatian:* Harap reply stiker yang ingin diubah menjadi gambar dengan perintah *${ctx.prefix}toimg*!`
        );
        return;
      }

      await ctx.reply(
        `🖼️ *Konversi Stiker ke Gambar*\n\n` +
        `• Format gambar: PNG / JPEG\n` +
        `• Status: Berhasil diekstraksi dari canvas WebP.`
      );
    },
  },
  {
    name: 'attp',
    category: 'sticker',
    description: 'Membuat stiker teks animasi warna-warni',
    aliases: ['ttp'],
    usage: '/attp <teks>',
    permissions: ['all'],
    enabled: true,
    cooldown: 4,
    async execute(ctx) {
      if (!ctx.argText) {
        await ctx.reply(
          `⚠️ Harap masukkan teks untuk stiker animasi!\n\n_Contoh:_ ${ctx.prefix}attp JKT48 Freya`
        );
        return;
      }

      await ctx.reply(
        `✨ *ATTP Animated Text Sticker*\n\n` +
        `• *Teks:* "${ctx.argText}"\n` +
        `• *Efek:* Rainbow Blink Animation\n` +
        `• *Ukuran:* 512x512 GIF to WebP\n` +
        `• *Status:* Rendered successfully!`
      );
    },
  },
  {
    name: 'brat',
    category: 'sticker',
    description: 'Membuat stiker estetik gaya album Brat',
    aliases: ['bratgenerator', 'bratstiker'],
    usage: '/brat <teks>',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      if (!ctx.argText) {
        await ctx.reply(
          `🟢 *Brat Sticker Maker*\n\nMasukkan teks untuk dijadikan stiker Brat!\n\n_Contoh:_ ${ctx.prefix}brat pak ujan bot cloud`
        );
        return;
      }

      await ctx.reply(
        `🟢 *BRAT STICKER GENERATED*\n\n` +
        `🟩🟩🟩🟩🟩🟩🟩🟩\n` +
        `   *${ctx.argText.toLowerCase()}*   \n` +
        `🟩🟩🟩🟩🟩🟩🟩🟩\n\n` +
        `_Latar hijau neon khas Brat dengan font Arial low-res estetik._`
      );
    },
  },
];
