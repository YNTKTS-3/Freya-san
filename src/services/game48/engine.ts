/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  verifiedMembers,
  verifiedSetlists,
  verifiedTrivia,
  digitalCardsList,
  MemberFact,
  SetlistFact,
  TriviaFact,
  DigitalCard,
} from './data.ts';

export interface PlayerProfile {
  userId: string;
  name: string;
  points: number;
  xp: number;
  level: number;
  gamesWon: number;
  dailyStreak: number;
  lastDailyClaim: string | null;
  cards: string[]; // Card IDs
}

export type GameType = 'member' | 'jiko' | 'setlist' | 'trivia' | 'susun';

export interface ActiveGame {
  chatId: string;
  type: GameType;
  question: string;
  answer: string;
  aliases: string[];
  hint: string;
  revealedHints: number;
  pointsReward: number;
  xpReward: number;
  startedAt: number;
  detail?: string;
}

class Game48Engine {
  private players: Map<string, PlayerProfile> = new Map();
  private activeSessions: Map<string, ActiveGame> = new Map();
  public gameEnabled: boolean = true;

  constructor() {
    // Seed default admin profile
    this.getOrCreatePlayer('6281234567890', 'Pak Ujan');
  }

  public getOrCreatePlayer(userId: string, name: string): PlayerProfile {
    const cleanId = userId.replace(/\D/g, '') || userId;
    let player = this.players.get(cleanId);
    if (!player) {
      player = {
        userId: cleanId,
        name: name || 'Wota Player',
        points: 50,
        xp: 0,
        level: 1,
        gamesWon: 0,
        dailyStreak: 1,
        lastDailyClaim: null,
        cards: ['c7'], // starts with a lightstick
      };
      this.players.set(cleanId, player);
    } else if (name && name !== 'Wota Player') {
      player.name = name;
    }
    return player;
  }

  public isGameActive(chatId: string): boolean {
    return this.activeSessions.has(chatId);
  }

  public getActiveGame(chatId: string): ActiveGame | undefined {
    return this.activeSessions.get(chatId);
  }

  // --- GAME SESSION STARTERS ---

  public startTebakMember(chatId: string): { success: boolean; message: string } {
    if (!this.gameEnabled) {
      return { success: false, message: '⚠️ Mode permainan 48Group saat ini sedang dinonaktifkan oleh Admin.' };
    }
    if (this.isGameActive(chatId)) {
      return { success: false, message: '⚠️ Masih ada permainan yang sedang berlangsung di chat ini! Selesaikan atau ketik /nyerah.' };
    }

    const random = verifiedMembers[Math.floor(Math.random() * verifiedMembers.length)];
    const question = `🎭 *TEBAK MEMBER JKT48* 🎭\n\n` +
      `• *Petunjuk:* ${random.clue}\n` +
      `• *Generasi:* Ke-${random.generation}\n` +
      `• *Kota Asal:* ${random.birthCity}\n\n` +
      `_Ketik langsung nama lengkap atau nama panggung member untuk menjawab!_ (Gunakan */hint* jika kesulitan)`;

    this.activeSessions.set(chatId, {
      chatId,
      type: 'member',
      question,
      answer: random.stageName.toLowerCase(),
      aliases: [random.name.toLowerCase()],
      hint: `${random.stageName[0]}... (${random.stageName.length} huruf)`,
      revealedHints: 1,
      pointsReward: 30,
      xpReward: 20,
      startedAt: Date.now(),
      detail: `${random.name} (Gen ${random.generation})`,
    });

    return { success: true, message: question };
  }

  public startTebakJiko(chatId: string): { success: boolean; message: string } {
    if (!this.gameEnabled) {
      return { success: false, message: '⚠️ Mode permainan 48Group saat ini sedang dinonaktifkan oleh Admin.' };
    }
    if (this.isGameActive(chatId)) {
      return { success: false, message: '⚠️ Masih ada permainan yang sedang berjalan! Ketik /nyerah untuk menyerah.' };
    }

    const random = verifiedMembers[Math.floor(Math.random() * verifiedMembers.length)];
    const question = `🎤 *TEBAK JIKOSHOUKAI MEMBER* 🎤\n\n` +
      `Siapakah member yang memiliki salam perkenalan (Jiko) berikut:\n` +
      `_"${random.jiko}"_\n\n` +
      `_Tebak nama member pemilik jiko ini!_`;

    this.activeSessions.set(chatId, {
      chatId,
      type: 'jiko',
      question,
      answer: random.stageName.toLowerCase(),
      aliases: [random.name.toLowerCase()],
      hint: `Berawalan huruf [ ${random.stageName[0]} ]`,
      revealedHints: 1,
      pointsReward: 40,
      xpReward: 25,
      startedAt: Date.now(),
      detail: `Pemilik jiko: ${random.name} (${random.stageName})`,
    });

    return { success: true, message: question };
  }

  public startTebakSetlist(chatId: string): { success: boolean; message: string } {
    if (!this.gameEnabled) {
      return { success: false, message: '⚠️ Mode permainan sedang dinonaktifkan.' };
    }
    if (this.isGameActive(chatId)) {
      return { success: false, message: '⚠️ Masih ada permainan yang aktif di sesi ini.' };
    }

    const random = verifiedSetlists[Math.floor(Math.random() * verifiedSetlists.length)];
    const songsSample = random.songs.slice(0, 3).join(', ');
    const question = `🎪 *TEBAK SETLIST TEATER 48GROUP* 🎪\n\n` +
      `Setlist teater apakah yang memiliki susunan lagu berikut:\n` +
      `🎵 *Lagu:* ${songsSample}, dll.\n` +
      `👥 *Dibawakan oleh:* ${random.team}\n\n` +
      `_Tebak judul setlist teater tersebut!_`;

    this.activeSessions.set(chatId, {
      chatId,
      type: 'setlist',
      question,
      answer: random.name.toLowerCase(),
      aliases: [random.aliasId.toLowerCase()],
      hint: `Inisial setlist: ${random.name.slice(0, 3)}...`,
      revealedHints: 1,
      pointsReward: 45,
      xpReward: 30,
      startedAt: Date.now(),
      detail: `Setlist Teater: ${random.name} (${random.team})`,
    });

    return { success: true, message: question };
  }

  public startTrivia(chatId: string): { success: boolean; message: string } {
    if (!this.gameEnabled) {
      return { success: false, message: '⚠️ Mode permainan sedang dinonaktifkan.' };
    }
    if (this.isGameActive(chatId)) {
      return { success: false, message: '⚠️ Masih ada kuis yang berlangsung!' };
    }

    const random = verifiedTrivia[Math.floor(Math.random() * verifiedTrivia.length)];
    let qText = `❓ *TRIVIA SEJARAH & FAKTA 48GROUP* ❓\n\n${random.question}\n\n`;
    if (random.options && random.options.length > 0) {
      qText += `*Pilihan Jawaban:*\n`;
      random.options.forEach((opt, idx) => {
        qText += `${String.fromCharCode(65 + idx)}. ${opt}\n`;
      });
      qText += `\n_Jawab langsung dengan pilihan atau teks jawaban!_`;
    }

    const aliases: string[] = [];
    if (random.options) {
      const idx = random.options.findIndex((o) => o.toLowerCase() === random.answer.toLowerCase());
      if (idx !== -1) {
        aliases.push(String.fromCharCode(65 + idx).toLowerCase());
      }
    }

    this.activeSessions.set(chatId, {
      chatId,
      type: 'trivia',
      question: qText,
      answer: random.answer.toLowerCase(),
      aliases,
      hint: `Panjang jawaban: ${random.answer.length} huruf`,
      revealedHints: 1,
      pointsReward: 35,
      xpReward: 25,
      startedAt: Date.now(),
      detail: random.explanation,
    });

    return { success: true, message: qText };
  }

  public startSusunMember(chatId: string): { success: boolean; message: string } {
    if (!this.gameEnabled) {
      return { success: false, message: '⚠️ Mode permainan sedang dinonaktifkan.' };
    }
    if (this.isGameActive(chatId)) {
      return { success: false, message: '⚠️ Masih ada permainan yang aktif.' };
    }

    const random = verifiedMembers[Math.floor(Math.random() * verifiedMembers.length)];
    const clean = random.stageName.toUpperCase();
    const scrambled = clean.split('').sort(() => 0.5 - Math.random()).join(' - ');

    const question = `🔤 *SUSUN NAMA MEMBER JKT48* 🔤\n\n` +
      `Susun huruf acak berikut menjadi nama panggilan member yang benar:\n` +
      `👉 *[ ${scrambled} ]*\n\n` +
      `• Clue: Member Generasi ${random.generation}\n` +
      `_Ketik susunan nama yang tepat!_`;

    this.activeSessions.set(chatId, {
      chatId,
      type: 'susun',
      question,
      answer: random.stageName.toLowerCase(),
      aliases: [random.name.toLowerCase()],
      hint: `Huruf pertama: ${clean[0]}`,
      revealedHints: 1,
      pointsReward: 25,
      xpReward: 15,
      startedAt: Date.now(),
      detail: `Nama lengkap: ${random.name}`,
    });

    return { success: true, message: question };
  }

  // --- ANSWER CHECKING & REWARDS ---

  public checkAnswer(
    chatId: string,
    userId: string,
    userName: string,
    userText: string
  ): { isMatch: boolean; replyText?: string } {
    const session = this.activeSessions.get(chatId);
    if (!session) return { isMatch: false };

    const cleanInput = userText.trim().toLowerCase();
    const isCorrect =
      cleanInput === session.answer ||
      session.aliases.some((alias) => alias === cleanInput);

    if (isCorrect) {
      this.activeSessions.delete(chatId);
      const player = this.getOrCreatePlayer(userId, userName);

      player.points += session.pointsReward;
      player.xp += session.xpReward;
      player.gamesWon += 1;

      // Check level up (every 100 XP)
      const newLevel = Math.floor(player.xp / 100) + 1;
      let levelUpNotice = '';
      if (newLevel > player.level) {
        player.level = newLevel;
        levelUpNotice = `\n🎉 *LEVEL UP!* Anda naik ke Level ${newLevel}!`;
      }

      const replyText = `🎉 *JAWABAN BENAR!* 🎉\n\n` +
        `• Pemenang: @${userName}\n` +
        `• Jawaban: *${session.answer.toUpperCase()}*\n` +
        (session.detail ? `• Info: ${session.detail}\n` : '') +
        `• Hadiah: +${session.pointsReward} Poin & +${session.xpReward} XP\n` +
        `• Total Poin Anda: ${player.points} Poin (Level ${player.level})${levelUpNotice}`;

      return { isMatch: true, replyText };
    }

    return { isMatch: false };
  }

  public getHint(chatId: string): string {
    const session = this.activeSessions.get(chatId);
    if (!session) {
      return '⚠️ Tidak ada sesi permainan yang sedang aktif di chat ini.';
    }
    return `💡 *CLUE / HINT:* ${session.hint}`;
  }

  public surrender(chatId: string): string {
    const session = this.activeSessions.get(chatId);
    if (!session) {
      return '⚠️ Tidak ada permainan yang sedang berlangsung.';
    }
    this.activeSessions.delete(chatId);
    return `🏳️ *MENYERAH!*\n\nJawaban yang benar adalah: *${session.answer.toUpperCase()}*` +
      (session.detail ? `\n_Catatan: ${session.detail}_` : '');
  }

  // --- DIGITAL GACHA CARDS SYSTEM ---

  public drawGacha(userId: string, userName: string): { success: boolean; message: string; card?: DigitalCard } {
    const player = this.getOrCreatePlayer(userId, userName);
    const gachaCost = 25;

    if (player.points < gachaCost) {
      return {
        success: false,
        message: `⚠️ Poin Anda tidak mencukupi untuk gacha kartu idol (Butuh ${gachaCost} poin, Anda punya ${player.points} poin).\n` +
          `Mainkan kuis /tebakmember atau /trivia48 untuk mengumpulkan poin!`,
      };
    }

    player.points -= gachaCost;

    // Roll tier with weighted probability
    const roll = Math.random() * 100;
    let targetTier: DigitalCard['tier'] = 'COMMON';
    if (roll < 8) {
      targetTier = 'ULTRA_RARE'; // 8% chance
    } else if (roll < 25) {
      targetTier = 'SUPER_RARE'; // 17% chance
    } else if (roll < 55) {
      targetTier = 'RARE'; // 30% chance
    } else {
      targetTier = 'COMMON'; // 45% chance
    }

    const matchingCards = digitalCardsList.filter((c) => c.tier === targetTier);
    const chosenCard = matchingCards[Math.floor(Math.random() * matchingCards.length)] || digitalCardsList[0];

    // Add card to player collection if not owned
    if (!player.cards.includes(chosenCard.id)) {
      player.cards.push(chosenCard.id);
    }

    const tierBadges: Record<string, string> = {
      ULTRA_RARE: '⭐⭐⭐⭐ [ULTRA RARE]',
      SUPER_RARE: '⭐⭐⭐ [SUPER RARE]',
      RARE: '⭐⭐ [RARE]',
      COMMON: '⭐ [COMMON]',
    };

    const message = `✨ *GACHA KARTU IDOL 48GROUP* ✨\n\n` +
      `Selamat @${userName}, kamu mendapatkan kartu digital fiktif:\n\n` +
      `🎴 *${chosenCard.name}*\n` +
      `• *Tier:* ${tierBadges[chosenCard.tier]}\n` +
      `• *Power Rating:* ${chosenCard.power} PWR\n` +
      `• *Role:* ${chosenCard.role}\n` +
      `• *Deskripsi:* "${chosenCard.description}"\n\n` +
      `_Sisa Poin: ${player.points} | Total Koleksi: ${player.cards.length}/${digitalCardsList.length} Kartu_`;

    return { success: true, message, card: chosenCard };
  }

  public getPlayerCards(userId: string, userName: string): string {
    const player = this.getOrCreatePlayer(userId, userName);
    const ownedCards = digitalCardsList.filter((c) => player.cards.includes(c.id));

    let msg = `🎴 *ALBUM KOLEKSI KARTU IDOL (@${userName})* 🎴\n\n` +
      `• Total Koleksi: *${ownedCards.length} / ${digitalCardsList.length} Kartu*\n` +
      `• Poin Tersedia: *${player.points} Poin*\n` +
      `• Level Wota: *Level ${player.level}* (${player.xp} XP)\n\n` +
      `*Daftar Kartu yang Dimiliki:*\n`;

    ownedCards.forEach((c, idx) => {
      msg += `${idx + 1}. [${c.tier}] *${c.name}* (PWR: ${c.power})\n`;
    });

    if (ownedCards.length === 0) {
      msg += `_(Belum ada kartu. Ketik /gachakartu seharga 25 poin!)_\n`;
    }

    return msg;
  }

  public claimDaily(userId: string, userName: string): string {
    const player = this.getOrCreatePlayer(userId, userName);
    const today = new Date().toISOString().slice(0, 10);

    if (player.lastDailyClaim === today) {
      return `⏰ @${userName}, Anda sudah mengklaim hadiah harian hari ini! Silakan kembali besok.`;
    }

    player.lastDailyClaim = today;
    player.dailyStreak += 1;
    const rewardPoints = 20 + Math.min(player.dailyStreak * 5, 50);
    const rewardXp = 15;
    player.points += rewardPoints;
    player.xp += rewardXp;

    return `🎁 *MISI HARIAN WOTA BERHASIL DIKLAIM!* 🎁\n\n` +
      `• Streak Kehadiran: *${player.dailyStreak} Hari Berturut-turut*\n` +
      `• Hadiah: +${rewardPoints} Poin & +${rewardXp} XP\n` +
      `• Saldo Poin Sekarang: *${player.points} Poin* (Level ${player.level})\n\n` +
      `_Semangat mendukung oshi hari ini! ✨_`;
  }

  public getLeaderboard(): string {
    const sorted = Array.from(this.players.values()).sort((a, b) => b.points - a.points);
    let msg = `🏆 *LEADERBOARD WOTA 48GROUP BOT* 🏆\n\n`;

    sorted.slice(0, 10).forEach((p, idx) => {
      const medal = idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : `${idx + 1}.`;
      msg += `${medal} *${p.name}* — ${p.points} Poin (Lv.${p.level} • ${p.gamesWon} Win)\n`;
    });

    if (sorted.length === 0) {
      msg += `Belum ada pemain terdaftar. Mainkan kuis untuk mencatatkan skormu!\n`;
    }

    return msg;
  }
}

export const game48Engine = new Game48Engine();
