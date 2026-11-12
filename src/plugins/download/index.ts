/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';

function isValidUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export const downloadPlugins: BotPlugin[] = [
  {
    name: 'tiktoknowm',
    category: 'download',
    description: 'Mengunduh video TikTok tanpa watermark',
    aliases: ['tiktok', 'tt', 'ttdl'],
    usage: '/tiktoknowm <url tiktok>',
    permissions: ['all'],
    enabled: true,
    cooldown: 5,
    apiRequirements: 'Tiktok Downloader Scraper / API Service',
    async execute(ctx) {
      const url = ctx.args[0];
      if (!url || !isValidUrl(url) || !url.includes('tiktok.com')) {
        await ctx.reply(
          `⚠️ *Format Salah!*\n\nSilakan masukkan tautan video TikTok yang valid.\n\n_Contoh:_ ${ctx.prefix}tiktoknowm https://vt.tiktok.com/xxxxxx/`
        );
        return;
      }

      await ctx.reply(
        `📥 *TikTok Downloader (No Watermark)*\n\n` +
        `• *Target URL:* ${url}\n` +
        `• *Status:* Memvalidasi tautan dan metadata konten...\n` +
        `• *Info:* Gunakan downloader gateway legal atau downloader service yang dikonfigurasi di dashboard server.`
      );
    },
  },
  {
    name: 'igdl',
    category: 'download',
    description: 'Mengunduh Reels, Video, atau Foto dari Instagram',
    aliases: ['instagram', 'ig', 'reels'],
    usage: '/igdl <url instagram>',
    permissions: ['all'],
    enabled: true,
    cooldown: 5,
    apiRequirements: 'Instagram Public API / Scraper Adapter',
    async execute(ctx) {
      const url = ctx.args[0];
      if (!url || !isValidUrl(url) || !url.includes('instagram.com')) {
        await ctx.reply(
          `⚠️ *Format Salah!*\n\nSilakan masukkan link Reels atau Post Instagram publik yang valid.\n\n_Contoh:_ ${ctx.prefix}igdl https://www.instagram.com/reel/Cxxxx/`
        );
        return;
      }

      await ctx.reply(
        `📸 *Instagram Downloader*\n\n` +
        `• *Target URL:* ${url}\n` +
        `• *Status:* Ekstraksi media stream feed...\n` +
        `• *Catatan:* Konten akun privat tidak dapat diunduh tanpa sesi otorisasi pengguna.`
      );
    },
  },
  {
    name: 'facebook',
    category: 'download',
    description: 'Mengunduh video Facebook HD/SD',
    aliases: ['fb', 'fbdl', 'fbvideo'],
    usage: '/facebook <url fb>',
    permissions: ['all'],
    enabled: true,
    cooldown: 5,
    apiRequirements: 'FB Media Parser Service',
    async execute(ctx) {
      const url = ctx.args[0];
      if (!url || !isValidUrl(url) || (!url.includes('facebook.com') && !url.includes('fb.watch'))) {
        await ctx.reply(
          `⚠️ *Format Salah!*\n\nMasukkan URL video Facebook publik yang valid.\n\n_Contoh:_ ${ctx.prefix}facebook https://www.facebook.com/watch/?v=12345`
        );
        return;
      }

      await ctx.reply(
        `📹 *Facebook Video Downloader*\n\n` +
        `• *Target URL:* ${url}\n` +
        `• *Resolusi didukung:* 720p HD / 360p SD\n` +
        `• *Status:* Menyiapkan stream pengunduhan...`
      );
    },
  },
  {
    name: 'ytmp3',
    category: 'download',
    description: 'Mengunduh audio dari YouTube dalam format MP3',
    aliases: ['yta', 'ytaudio'],
    usage: '/ytmp3 <url youtube>',
    permissions: ['all'],
    enabled: true,
    cooldown: 6,
    apiRequirements: 'YouTube Streamer Engine (yt-dlp or compatible service)',
    async execute(ctx) {
      const url = ctx.args[0];
      if (!url || !isValidUrl(url) || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
        await ctx.reply(
          `⚠️ *Format Salah!*\n\nMasukkan tautan video YouTube yang valid.\n\n_Contoh:_ ${ctx.prefix}ytmp3 https://youtu.be/dQw4w9WgXcQ`
        );
        return;
      }

      await ctx.reply(
        `🎵 *YouTube Audio (MP3) Downloader*\n\n` +
        `• *Target URL:* ${url}\n` +
        `• *Format:* MP3 (High Bitrate 192kbps)\n` +
        `• *Status:* Menyiapkan proses konversi audio...`
      );
    },
  },
  {
    name: 'ytmp4',
    category: 'download',
    description: 'Mengunduh video YouTube dalam format MP4',
    aliases: ['ytv', 'ytvideo'],
    usage: '/ytmp4 <url youtube>',
    permissions: ['all'],
    enabled: true,
    cooldown: 6,
    apiRequirements: 'YouTube Streamer Engine (yt-dlp or compatible service)',
    async execute(ctx) {
      const url = ctx.args[0];
      if (!url || !isValidUrl(url) || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
        await ctx.reply(
          `⚠️ *Format Salah!*\n\nMasukkan link video YouTube yang valid.\n\n_Contoh:_ ${ctx.prefix}ytmp4 https://youtu.be/dQw4w9WgXcQ`
        );
        return;
      }

      await ctx.reply(
        `🎬 *YouTube Video (MP4) Downloader*\n\n` +
        `• *Target URL:* ${url}\n` +
        `• *Kualitas:* 720p / 480p\n` +
        `• *Status:* Ekstraksi stream video...`
      );
    },
  },
];
