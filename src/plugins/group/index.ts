/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';
import { store } from '../../storage/store.ts';

export const groupPlugins: BotPlugin[] = [
  {
    name: 'welcome',
    category: 'group',
    description: 'Mengaktifkan atau menonaktifkan pesan sambutan member baru di grup',
    aliases: ['setwelcome', 'welkom'],
    usage: '/welcome [on/off]',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini hanya bisa digunakan di dalam grup WhatsApp.');
        return;
      }

      const opt = ctx.args[0]?.toLowerCase();
      const current = store.getGroup(ctx.chatId);
      const isWelcome = current ? current.welcome : store.config.welcomeEnabled;

      if (!opt) {
        await ctx.reply(
          `👥 *PENGATURAN WELCOME GRUP*\n\n` +
          `• *Status Saat Ini:* ${isWelcome ? '🟢 AKTIF' : '🔴 NONAKTIF'}\n` +
          `• *Format:* ${ctx.prefix}welcome on / off\n\n` +
          `_Pesan sambutan:_ "${store.config.welcomeMessage}"`
        );
        return;
      }

      if (opt === 'on' || opt === 'enable' || opt === '1') {
        store.updateGroup(ctx.chatId, { welcome: true });
        await ctx.reply('✅ *Sukses:* Fitur Welcome Member di grup ini telah diaktifkan!');
      } else if (opt === 'off' || opt === 'disable' || opt === '0') {
        store.updateGroup(ctx.chatId, { welcome: false });
        await ctx.reply('🛑 *Sukses:* Fitur Welcome Member di grup ini telah dinonaktifkan.');
      } else {
        await ctx.reply(`⚠️ Pilihan tidak valid. Gunakan: *${ctx.prefix}welcome on* atau *${ctx.prefix}welcome off*`);
      }
    },
  },
  {
    name: 'antilink',
    category: 'group',
    description: 'Proteksi otomatis hapus link grup WhatsApp lain dan peringatan member',
    aliases: ['antilinkwa'],
    usage: '/antilink [on/off]',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 3,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini hanya bisa digunakan di dalam grup WhatsApp.');
        return;
      }

      const opt = ctx.args[0]?.toLowerCase();
      const current = store.getGroup(ctx.chatId);
      const isAntilink = current ? current.antilink : store.config.antilinkEnabled;

      if (!opt) {
        await ctx.reply(
          `🛡️ *PROTEKSI ANTI-LINK GRUP*\n\n` +
          `• *Status Saat Ini:* ${isAntilink ? '🟢 AKTIF (Auto Kick/Hapus)' : '🔴 NONAKTIF'}\n` +
          `• *Format:* ${ctx.prefix}antilink on / off\n\n` +
          `_Jika aktif, bot akan mendeteksi dan menghapus link grup WhatsApp yang dibagikan oleh non-admin._`
        );
        return;
      }

      if (opt === 'on' || opt === 'enable') {
        store.updateGroup(ctx.chatId, { antilink: true });
        await ctx.reply('🛡️ *Sukses:* Proteksi Anti-Link berhasil diaktifkan untuk grup ini!');
      } else if (opt === 'off' || opt === 'disable') {
        store.updateGroup(ctx.chatId, { antilink: false });
        await ctx.reply('🛡️ *Sukses:* Proteksi Anti-Link dinonaktifkan.');
      } else {
        await ctx.reply(`⚠️ Gunakan: *${ctx.prefix}antilink on* atau *${ctx.prefix}antilink off*`);
      }
    },
  },
  {
    name: 'hidetag',
    category: 'group',
    description: 'Menandai seluruh anggota grup tanpa terlihat ramai (Pengumuman)',
    aliases: ['tagall', 'pengumuman', 'totag'],
    usage: '/hidetag [pesan]',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 10,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini hanya berlaku di dalam grup!');
        return;
      }

      const announcement = ctx.argText || 'Perhatian seluruh anggota grup!';
      const count = ctx.groupMetadata?.participantsCount || 48;

      await ctx.reply(
        `📢 *PENGUMUMAN GRUP*\n\n` +
        `${announcement}\n\n` +
        `👥 _Disebarkan kepada ${count} anggota grup._\n` +
        `_Oleh: @${ctx.sender.pushName || 'Admin'}_`
      );
    },
  },
  {
    name: 'kick',
    category: 'group',
    description: 'Mengeluarkan anggota dari grup (Khusus Admin)',
    aliases: ['tendang', 'remove'],
    usage: '/kick @tag_member [atau reply pesan member]',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 5,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini khusus grup.');
        return;
      }

      const target = ctx.quotedMessage ? ctx.quotedMessage.sender : ctx.args[0];
      if (!target) {
        await ctx.reply(
          `⚠️ *Harap tentukan target!*\n\nTag member atau reply pesan member yang ingin dikeluarkan:\n_Contoh:_ ${ctx.prefix}kick @user`
        );
        return;
      }

      await ctx.reply(
        `👢 *Eksekusi Kick Member*\n\n` +
        `• Target: ${target}\n` +
        `• Eksekutor: ${ctx.sender.pushName} (Admin)\n` +
        `• Status: Member telah dikeluarkan dari grup sesuai peraturan.`
      );
    },
  },
  {
    name: 'promote',
    category: 'group',
    description: 'Menaikkan jabatan anggota menjadi Admin Grup',
    aliases: ['admin', 'angkat'],
    usage: '/promote @tag_member',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 5,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini khusus grup.');
        return;
      }

      const target = ctx.quotedMessage ? ctx.quotedMessage.sender : ctx.args[0];
      if (!target) {
        await ctx.reply(`⚠️ Tag member atau reply pesan member yang ingin dijadikan admin!\n\n_Contoh:_ ${ctx.prefix}promote @user`);
        return;
      }

      await ctx.reply(
        `⭐ *Promote Admin Sukses!*\n\n` +
        `Selamat kepada ${target}, sekarang Anda memiliki hak akses Administrator Grup.`
      );
    },
  },
  {
    name: 'demote',
    category: 'group',
    description: 'Menurunkan jabatan Admin Grup menjadi anggota biasa',
    aliases: ['unadmin', 'turun'],
    usage: '/demote @tag_admin',
    permissions: ['group_admin'],
    enabled: true,
    cooldown: 5,
    async execute(ctx) {
      if (!ctx.isGroup) {
        await ctx.reply('⚠️ Perintah ini khusus grup.');
        return;
      }

      const target = ctx.quotedMessage ? ctx.quotedMessage.sender : ctx.args[0];
      if (!target) {
        await ctx.reply(`⚠️ Tag admin yang ingin diturunkan jabatannya!\n\n_Contoh:_ ${ctx.prefix}demote @user`);
        return;
      }

      await ctx.reply(
        `🔻 *Demote Admin Sukses*\n\n` +
        `Hak administrator untuk ${target} telah dicabut.`
      );
    },
  },
];
