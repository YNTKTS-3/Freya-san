/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  HelpCircle,
  Smartphone,
  Server,
  Key,
  Code2,
  ShieldAlert,
  Copy,
  Check,
} from 'lucide-react';

export const GuideTab: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const termuxCode = `# 1. Update paket Termux di HP Android
pkg update && pkg upgrade -y

# 2. Install Node.js dan Git
pkg install nodejs-lts git -y

# 3. Masuk ke folder proyek UjanBot Cloud
cd ujanbot-cloud

# 4. Install dependensi
npm install

# 5. Jalankan bot engine & dashboard
npm run dev`;

  const vpsCode = `# 1. Update server Ubuntu
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js v20/v22 & PM2
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# 3. Jalankan bot dengan PM2 auto-restart 24/7
pm2 start server.ts --name "freya-bot" --interpreter tsx
pm2 save
pm2 startup`;

  const pluginTemplate = `import { BotPlugin } from '../../core/types.ts';

export const myNewPlugin: BotPlugin = {
  name: 'contoh',
  category: 'general',
  description: 'Contoh plugin buatan Pak Ujan',
  aliases: ['tes'],
  usage: '/contoh [parameter]',
  permissions: ['all'], // 'all' | 'group_admin' | 'owner'
  enabled: true,
  cooldown: 3,
  async execute(ctx) {
    await ctx.reply('Halo! Perintah berhasil dijalankan oleh ' + ctx.sender.pushName);
  },
};`;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-purple-400" />
          <span>Panduan Lengkap Pak Ujan (Instalasi & Pengoperasian)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Petunjuk langkah-demi-langkah ramah pemula untuk menjalankan bot di HP Android (Termux) dan VPS Ubuntu Linux secara gratis (Rp0).
        </p>
      </div>

      {/* Guide Cards */}
      <div className="space-y-6">
        {/* Android Termux Guide */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">1. Menjalankan di HP Android (Termux)</h3>
                <p className="text-xs text-slate-400">Cocok bagi Anda yang belum memiliki laptop/komputer</p>
              </div>
            </div>
            <button
              onClick={() => copyText(termuxCode, 1)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition"
            >
              {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 1 ? 'Tersalin' : 'Salin Perintah'}</span>
            </button>
          </div>

          <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
            <p>1. Download dan pasang aplikasi <strong>Termux</strong> (dari F-Droid / GitHub resmi Termux).</p>
            <p>2. Salin dan tempel perintah berikut di layar Termux:</p>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-purple-300 overflow-x-auto">
            {termuxCode}
          </pre>

          <p className="text-xs text-slate-400">
            Setelah perintah di atas berjalan, buka browser Chrome di HP Anda dan kunjungi <code>http://localhost:3000</code> untuk membuka Web Dashboard ini.
          </p>
        </div>

        {/* VPS Ubuntu Guide */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">2. Menjalankan di VPS Ubuntu (24/7 Online)</h3>
                <p className="text-xs text-slate-400">Menggunakan PM2 agar bot otomatis hidup kembali jika server restart</p>
              </div>
            </div>
            <button
              onClick={() => copyText(vpsCode, 2)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition"
            >
              {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 2 ? 'Tersalin' : 'Salin Perintah'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-blue-300 overflow-x-auto">
            {vpsCode}
          </pre>
        </div>

        {/* WhatsApp Pairing Guide */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">3. Cara Pairing WhatsApp Tanpa HP Lain</h3>
              <p className="text-xs text-slate-400">Fitur 8-Digit Pairing Code sangat berguna saat hanya punya 1 HP</p>
            </div>
          </div>
          <div className="text-xs text-slate-300 space-y-1.5 pl-1 leading-relaxed">
            <p>1. Masuk ke tab <strong>Koneksi WhatsApp</strong> di dashboard.</p>
            <p>2. Pilih tab <strong>Pairing Code 8-Digit</strong>.</p>
            <p>3. Masukkan nomor WhatsApp bot Anda (misal: <code>6281234567890</code>) lalu tekan "Minta Kode".</p>
            <p>4. Buka WhatsApp &gt; Perangkat Tertaut &gt; Tautkan dengan nomor telepon saja.</p>
            <p>5. Ketik kode 8-digit yang muncul di layar. Sesi bot akan langsung aktif!</p>
          </div>
        </div>

        {/* Adding New Plugin Guide */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">4. Cara Menambah Command Baru (Plugin)</h3>
                <p className="text-xs text-slate-400">Format modular independen tanpa merusak file lain</p>
              </div>
            </div>
            <button
              onClick={() => copyText(pluginTemplate, 3)}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition"
            >
              {copiedIndex === 3 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedIndex === 3 ? 'Tersalin' : 'Salin Kode'}</span>
            </button>
          </div>

          <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-pink-300 overflow-x-auto">
            {pluginTemplate}
          </pre>
        </div>

        {/* Anti-Banned Tips */}
        <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-900/40 space-y-3">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 text-rose-400" />
            <span>Tips Aman Mencegah Banned Nomor WhatsApp</span>
          </div>
          <ul className="text-xs text-rose-200/90 space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Gunakan nomor sekunder atau nomor khusus bot, bukan nomor utama pribadi Anda.</li>
            <li>Pertahankan cooldown perintah (default 3 detik) untuk mencegah banjir pesan.</li>
            <li>Jangan pernah mengirim pesan spam massal atau broadcast ke orang yang tidak menyimpan kontak Anda.</li>
            <li>Patuhi kebijakan privasi: fitur berbahaya seperti fakebca, grabcontact, dan bypass view-once telah diblokir permanen di bot ini.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
