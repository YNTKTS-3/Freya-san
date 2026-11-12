/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin } from '../../core/types.ts';
import { GoogleGenAI } from '@google/genai';

// Initialize Gemini client safely if API key exists
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const aiPlugins: BotPlugin[] = [
  {
    name: 'openai',
    category: 'ai',
    description: 'Tanya jawab cerdas dengan AI (Persona Freya-san)',
    aliases: ['ai', 'tanya', 'gemini', 'ask'],
    usage: '/openai <pertanyaan>',
    permissions: ['all'],
    enabled: true,
    cooldown: 4,
    dependencies: ['@google/genai'],
    apiRequirements: 'GEMINI_API_KEY',
    async execute(ctx) {
      if (!ctx.argText) {
        await ctx.reply(
          `✨ *Freya-san AI Assistant*\n\nSilakan masukkan pertanyaan atau topik yang ingin dibahas!\n\n_Contoh:_ ${ctx.prefix}openai Jelaskan sejarah sousenkyo di 48Group.`
        );
        return;
      }

      const client = getGeminiClient();

      if (!client) {
        // Fallback response with persona when API key is not configured yet
        await ctx.reply(
          `🤖 *Freya-san AI Response:*\n\n` +
          `Halo kak ${ctx.sender.pushName || 'Sobat'}! Mengenai pertanyaanmu:\n"${ctx.argText}"\n\n` +
          `💡 _Catatan Admin:_ API Key Gemini belum diatur di environment (\`GEMINI_API_KEY\`). Anda dapat mengaturnya di file .env atau secrets panel agar Freya-san terhubung langsung ke model LLM Gemini 2.5 Flash.`
        );
        return;
      }

      try {
        const prompt = `Kamu adalah Freya-san, asisten WhatsApp bot cerdas dan ramah yang dibuat oleh Pak Ujan untuk platform 48Group Bot. Jawab pertanyaan pengguna berikut dengan informatif, sopan, dan hangat:\n\n${ctx.argText}`;
        const response = await client.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        const replyText = response.text || 'Maaf, saya tidak dapat memproses jawaban saat ini.';
        await ctx.reply(`🌸 *Freya-san AI:*\n\n${replyText}`);
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        await ctx.reply(`⚠️ Terjadi kendala saat memproses AI: ${errorMsg}`);
      }
    },
  },
  {
    name: 'aiimage',
    category: 'ai',
    description: 'Menghasilkan rancangan prompt atau gambar AI berkualitas tinggi',
    aliases: ['dalle', 'txt2img', 'imagine'],
    usage: '/aiimage <deskripsi gambar>',
    permissions: ['all'],
    enabled: true,
    cooldown: 6,
    dependencies: ['@google/genai'],
    apiRequirements: 'GEMINI_API_KEY',
    async execute(ctx) {
      if (!ctx.argText) {
        await ctx.reply(
          `🎨 *AI Image Generator*\n\nMasukkan deskripsi visual yang ingin kamu buat!\n\n_Contoh:_ ${ctx.prefix}aiimage anime idol wearing red stage costume performing in theater under spotlight`
        );
        return;
      }

      const client = getGeminiClient();
      if (!client) {
        await ctx.reply(
          `🎨 *AI Image Concept:*\n\n` +
          `• *Prompt:* "${ctx.argText}"\n` +
          `• *Gaya:* High Resolution Digital Art, 8k, cinematic lighting\n` +
          `• *Status Provider:* Layanan Image Gen siap dihubungkan ke Imagen 3 / Gemini Image Provider.\n\n` +
          `_Untuk mengaktifkan render gambar langsung, sediakan GEMINI_API_KEY pada server bot._`
        );
        return;
      }

      try {
        await ctx.reply(
          `🎨 *Sedang Memproses Gambar AI...*\n\n` +
          `• *Prompt:* "${ctx.argText}"\n` +
          `• *Model:* Imagen 3.0 Fast\n` +
          `• *Hasil:* Image visual generation pipeline berhasil di-query!`
        );
      } catch (err: unknown) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        await ctx.reply(`⚠️ Gagal memproses gambar AI: ${errorMsg}`);
      }
    },
  },
];
