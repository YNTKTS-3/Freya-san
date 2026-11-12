/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Settings,
  Save,
  Check,
  Shield,
  Bot,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { BotConfig } from '../core/types.ts';

interface SettingsTabProps {
  config: BotConfig;
  onSaveConfig: (updated: Partial<BotConfig>) => Promise<void>;
}

export const SettingsTab: React.FC<SettingsTabProps> = ({
  config,
  onSaveConfig,
}) => {
  const [formData, setFormData] = useState<BotConfig>({ ...config });
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await onSaveConfig(formData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Settings className="w-5 h-5 text-purple-400" />
          <span>Pengaturan Bot & Konfigurasi Global</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Sesuaikan identitas bot, prefix command, nomor owner, AI provider, dan proteksi otomatis.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Identity Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-slate-800 pb-3">
            <Bot className="w-4 h-4 text-purple-400" />
            <span>Identitas Bot & Owner</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Nama WhatsApp Bot
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Prefix Command Aktif
              </label>
              <input
                type="text"
                value={formData.prefix}
                onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                required
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Mendukung multi-prefix: /, !, ., #
              </span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Nama Owner
              </label>
              <input
                type="text"
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Nomor WhatsApp Owner (dengan kode negara)
              </label>
              <input
                type="text"
                value={formData.ownerNumber}
                onChange={(e) => setFormData({ ...formData, ownerNumber: e.target.value })}
                placeholder="6281234567890"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
                required
              />
            </div>
          </div>
        </div>

        {/* AI & Cooldown Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-slate-800 pb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>AI Model & Anti-Spam Cooldown</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Model LLM AI
              </label>
              <select
                value={formData.aiModel}
                onChange={(e) => setFormData({ ...formData, aiModel: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
              >
                <option value="gemini-2.5-flash">Gemini 2.5 Flash (Rekomendasi Cepat & Ringan)</option>
                <option value="gemini-2.5-pro">Gemini 2.5 Pro (Penalaran Kompleks)</option>
                <option value="gemini-2.0-flash">Gemini 2.0 Flash</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Default Cooldown (Detik)
              </label>
              <input
                type="number"
                min={0}
                max={60}
                value={formData.defaultCooldown}
                onChange={(e) => setFormData({ ...formData, defaultCooldown: Number(e.target.value) })}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Mencegah spam bot dari pengguna biasa.
              </span>
            </div>
          </div>
        </div>

        {/* Automation & Moderation Card */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-sm font-bold text-white border-b border-slate-800 pb-3">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span>Otomasi Pesan Sambutan & Moderasi Grup</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div>
                <span className="text-sm font-semibold text-white block">Fitur Welcome Member Baru</span>
                <span className="text-xs text-slate-400">
                  Kirim pesan sambutan otomatis saat ada anggota bergabung ke grup.
                </span>
              </div>
              <input
                type="checkbox"
                checked={formData.welcomeEnabled}
                onChange={(e) => setFormData({ ...formData, welcomeEnabled: e.target.checked })}
                className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500 bg-slate-900 border-slate-700"
              />
            </div>

            {formData.welcomeEnabled && (
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Teks Pesan Welcome
                </label>
                <textarea
                  rows={3}
                  value={formData.welcomeMessage}
                  onChange={(e) => setFormData({ ...formData, welcomeMessage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>
            )}

            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
              <div>
                <span className="text-sm font-semibold text-white block">Proteksi Anti-Link Global</span>
                <span className="text-xs text-slate-400">
                  Otomatis mendeteksi dan menghapus link grup WhatsApp yang dibagikan oleh non-admin.
                </span>
              </div>
              <input
                type="checkbox"
                checked={formData.antilinkEnabled}
                onChange={(e) => setFormData({ ...formData, antilinkEnabled: e.target.checked })}
                className="w-5 h-5 rounded text-purple-600 focus:ring-purple-500 bg-slate-900 border-slate-700"
              />
            </div>
          </div>
        </div>

        {/* Save Bar */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <div>
            {saveSuccess && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                Pengaturan berhasil disimpan ke sistem!
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition shadow-lg shadow-purple-600/30 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
          </button>
        </div>
      </form>
    </div>
  );
};
