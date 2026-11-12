/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Layers,
  Info,
} from 'lucide-react';
import { BotPlugin, CommandCategory } from '../core/types.ts';

interface PluginManagerTabProps {
  plugins: BotPlugin[];
  onTogglePlugin: (name: string, enabled: boolean) => Promise<void>;
  prefix: string;
}

export const PluginManagerTab: React.FC<PluginManagerTabProps> = ({
  plugins,
  onTogglePlugin,
  prefix,
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlugin, setSelectedPlugin] = useState<BotPlugin | null>(null);

  const categories: { key: string; label: string }[] = [
    { key: 'all', label: 'Semua Kategori' },
    { key: 'general', label: 'General' },
    { key: 'ai', label: 'AI' },
    { key: 'download', label: 'Downloader' },
    { key: 'sticker', label: 'Sticker' },
    { key: 'tools', label: 'Tools' },
    { key: 'group', label: 'Group' },
  ];

  const filteredPlugins = plugins.filter((p) => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      (p.aliases && p.aliases.some((a) => a.toLowerCase().includes(search.toLowerCase())));
    return matchCat && matchSearch;
  });

  const enabledCount = plugins.filter((p) => p.enabled).length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" />
            <span>Plugin Manager (Arsitektur Dinamis)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Kelola status aktif/nonaktif, hak izin, cooldown, dan dependensi 30 plugin mandiri Freya-san Bot.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-xl bg-purple-950 border border-purple-800 text-purple-200 text-xs font-semibold">
            {enabledCount} / {plugins.length} Aktif
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari plugin (nama, deskripsi, alias)..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setSelectedCategory(c.key)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                selectedCategory === c.key
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Plugins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlugins.map((plugin) => {
          return (
            <div
              key={plugin.name}
              className={`p-4 rounded-xl border transition flex flex-col justify-between ${
                plugin.enabled
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                  : 'bg-slate-950/60 border-slate-900 opacity-60'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-white text-base">
                      {prefix}{plugin.name}
                    </span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-purple-300 border border-slate-700">
                      {plugin.category}
                    </span>
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => onTogglePlugin(plugin.name, !plugin.enabled)}
                    role="switch"
                    aria-checked={plugin.enabled}
                    aria-label={`Toggle plugin ${plugin.name}`}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      plugin.enabled ? 'bg-purple-600' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        plugin.enabled ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {plugin.description}
                </p>

                {plugin.aliases && plugin.aliases.length > 0 && (
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 mb-2 font-mono">
                    <span className="text-slate-400">Alias:</span>
                    {plugin.aliases.map((a) => (
                      <span key={a} className="px-1.5 py-0.2 rounded bg-slate-950 text-slate-300">
                        {prefix}{a}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {plugin.cooldown}s
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    <Shield className="w-3 h-3 text-slate-400" />
                    {plugin.permissions.includes('owner')
                      ? 'Owner'
                      : plugin.permissions.includes('group_admin')
                      ? 'Admin'
                      : 'All'}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedPlugin(plugin)}
                  className="text-purple-400 hover:text-purple-300 text-xs font-medium"
                >
                  Detail &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredPlugins.length === 0 && (
        <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
          Tidak ada plugin yang cocok dengan filter pencarian "{search}".
        </div>
      )}

      {/* Plugin Details Modal */}
      {selectedPlugin && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase font-semibold text-purple-400 tracking-wider">
                  Detail Plugin
                </span>
                <h3 className="text-xl font-bold text-white font-mono">
                  {prefix}{selectedPlugin.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPlugin(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
                aria-label="Tutup detail plugin"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300">{selectedPlugin.description}</p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-semibold text-slate-400 block mb-1">Penggunaan (Usage):</span>
                <code className="text-purple-300 font-mono text-sm">{selectedPlugin.usage}</code>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Kategori</span>
                  <span className="font-semibold text-slate-200 capitalize">{selectedPlugin.category}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Cooldown Anti-Spam</span>
                  <span className="font-semibold text-slate-200">{selectedPlugin.cooldown} Detik</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Hak Akses</span>
                  <span className="font-semibold text-slate-200">{selectedPlugin.permissions.join(', ')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Status Eksekusi</span>
                  <span className={`font-semibold ${selectedPlugin.enabled ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedPlugin.enabled ? 'Aktif (Ready)' : 'Dinonaktifkan'}
                  </span>
                </div>
              </div>

              {selectedPlugin.apiRequirements && (
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block font-semibold mb-1">Dependensi / Layanan Eksternal:</span>
                  <span className="text-amber-300">{selectedPlugin.apiRequirements}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedPlugin(null)}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
