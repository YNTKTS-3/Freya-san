/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';
import { game48Engine } from '../../services/game48/engine.ts';

export const gamePlugins: BotPlugin[] = [
  {
    name: 'tebakmember',
    category: 'game',
    description: 'Permainan tebak nama member JKT48 berdasarkan clue dan generasi',
    aliases: ['member48', 'tebakoshi'],
    usage: '/tebakmember',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.startTebakMember(ctx.chatId);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'tebakjiko',
    category: 'game',
    description: 'Permainan tebak salam perkenalan (Jikoshoukai) member JKT48',
    aliases: ['jiko', 'tebakjikoshowkai'],
    usage: '/tebakjiko',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.startTebakJiko(ctx.chatId);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'tebaksetlist',
    category: 'game',
    description: 'Permainan menebak judul setlist teater 48Group dari daftar lagu',
    aliases: ['setlist', 'tebaktheater'],
    usage: '/tebaksetlist',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.startTebakSetlist(ctx.chatId);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'trivia48',
    category: 'game',
    description: 'Kuis trivia seputar fakta dan sejarah 48Group / JKT48',
    aliases: ['kuis48', 'kuisjkt48'],
    usage: '/trivia48',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.startTrivia(ctx.chatId);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'susunmember',
    category: 'game',
    description: 'Permainan menyusun huruf acak menjadi nama member JKT48',
    aliases: ['susunkata48'],
    usage: '/susunmember',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.startSusunMember(ctx.chatId);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'hint',
    category: 'game',
    description: 'Meminta petunjuk clue tambahan saat permainan kuis sedang aktif',
    aliases: ['bantuan', 'clue'],
    usage: '/hint',
    permissions: ['all'],
    enabled: true,
    cooldown: 2,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const hintMsg = game48Engine.getHint(ctx.chatId);
      await ctx.reply(hintMsg);
    },
  },
  {
    name: 'nyerah',
    category: 'game',
    description: 'Menyerah dan melihat jawaban dari permainan yang sedang aktif',
    aliases: ['surrender'],
    usage: '/nyerah',
    permissions: ['all'],
    enabled: true,
    cooldown: 2,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const surrenderMsg = game48Engine.surrender(ctx.chatId);
      await ctx.reply(surrenderMsg);
    },
  },
  {
    name: 'gachakartu',
    category: 'game',
    description: 'Gacha kartu idol digital fiktif (Common, Rare, Super Rare, Ultra Rare)',
    aliases: ['gacha', 'tarikkartu'],
    usage: '/gachakartu',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const res = game48Engine.drawGacha(ctx.sender.id, ctx.sender.pushName);
      await ctx.reply(res.message);
    },
  },
  {
    name: 'koleksikartu',
    category: 'game',
    description: 'Melihat binder album koleksi kartu idol yang dimiliki pemain',
    aliases: ['kartuku', 'binder'],
    usage: '/koleksikartu',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const msg = game48Engine.getPlayerCards(ctx.sender.id, ctx.sender.pushName);
      await ctx.reply(msg);
    },
  },
  {
    name: 'leaderboard48',
    category: 'game',
    description: 'Papan peringkat wota dengan poin dan level tertinggi',
    aliases: ['topglobal', 'topwota'],
    usage: '/leaderboard48',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const board = game48Engine.getLeaderboard();
      await ctx.reply(board);
    },
  },
  {
    name: 'misiharian',
    category: 'game',
    description: 'Klaim hadiah harian (daily streak) berupa poin dan XP',
    aliases: ['daily', 'klaim'],
    usage: '/misiharian',
    permissions: ['all'],
    enabled: true,
    cooldown: 3,
    status: 'IMPLEMENTED',
    isFree: true,
    async execute(ctx) {
      const msg = game48Engine.claimDaily(ctx.sender.id, ctx.sender.pushName);
      await ctx.reply(msg);
    },
  },
];
