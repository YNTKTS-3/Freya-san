/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  ShieldAlert,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Lock,
  Layers,
  HelpCircle,
  Code2,
  Database,
  Info,
} from 'lucide-react';
import { CatalogItem, CommandStatus, CommandCategory } from '../core/types.ts';

interface CommandCatalogTabProps {
  catalog: CatalogItem[];
  prefix: string;
  onTogglePlugin?: (name: string, enabled: boolean) => Promise<void>;
  enabledPlugins?: Set<string>;
}

export const CommandCatalogTab: React.FC<CommandCatalogTabProps> = ({
  catalog,
  prefix,
  onTogglePlugin,
  enabledPlugins = new Set(),
}) => {
  const [search, setSearch] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [detailModalItem, setDetailModalItem] = useState<CatalogItem | null>(null);

  // Compute live actual statistics from catalog array
  const totalEntries = catalog.length;
  const uniqueNamesCount = new Set(catalog.map((c) => c.name)).size;
  const duplicateEntriesCount = catalog.filter((c) => c.isDuplicate).length;

  const statusCounts = {
    IMPLEMENTED: catalog.filter((c) => c.status === 'IMPLEMENTED').length,
    BLOCKED: catalog.filter((c) => c.status === 'BLOCKED').length,
    NEEDS_API: catalog.filter((c) => c.status === 'NEEDS_API').length,
    NEEDS_SPECIFICATION: catalog.filter((c) => c.status === 'NEEDS_SPECIFICATION').length,
    PLANNED: catalog.filter((c) => c.status === 'PLANNED').length,
  };

  const statusFilters = [
    { key: 'ALL', label: `Semua (${totalEntries})` },
    { key: 'IMPLEMENTED', label: `Implemented (${statusCounts.IMPLEMENTED})` },
    { key: 'BLOCKED', label: `Blocked (${statusCounts.BLOCKED})` },
    { key: 'NEEDS_API', label: `Needs API (${statusCounts.NEEDS_API})` },
    { key: 'NEEDS_SPECIFICATION', label: `Needs Spec (${statusCounts.NEEDS_SPECIFICATION})` },
    { key: 'PLANNED', label: `Planned (${statusCounts.PLANNED})` },
  ];

  const categoryFilters: { key: string; label: string }[] = [
    { key: 'ALL', label: 'Semua Kategori' },
    { key: 'ai', label: 'AI' },
    { key: 'download', label: 'Download' },
    { key: 'game', label: 'Game 48' },
    { key: 'general', label: 'General' },
    { key: 'group', label: 'Group' },
    { key: 'info', label: 'Info' },
    { key: 'owner', label: 'Owner' },
    { key: 'random', label: 'Random' },
    { key: 'search', label: 'Search' },
    { key: 'sticker', label: 'Sticker' },
    { key: 'textmaker', label: 'Textmaker' },
    { key: 'tools', label: 'Tools' },
  ];

  const filtered = catalog.filter((item) => {
    const matchStatus = selectedStatus === 'ALL' || item.status === selectedStatus;
    const matchCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.originalName.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      (item.aliases && item.aliases.some((a) => a.toLowerCase().includes(search.toLowerCase())));
    return matchStatus && matchCategory && matchSearch;
  });

  const getStatusBadge = (status: CommandStatus) => {
    switch (status) {
      case 'IMPLEMENTED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            IMPLEMENTED
          </span>
        );
      case 'BLOCKED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <Lock className="w-3 h-3" />
            BLOCKED
          </span>
        );
      case 'NEEDS_API':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <AlertTriangle className="w-3 h-3" />
            NEEDS API
          </span>
        );
      case 'NEEDS_SPECIFICATION':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <HelpCircle className="w-3 h-3" />
            NEEDS SPEC
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30">
            <Clock className="w-3 h-3" />
            PLANNED
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              <span>Katalog Lengkap Referensi Command (Wibusoft v4.0 + 48Group)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Audit menyeluruh {totalEntries} entri command referensi, status implementasi nyata, perizinan, dependensi API, dan kebijakan keamanan privasi.
            </p>
          </div>
        </div>

        {/* Real-time Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-5">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Total Entri</span>
            <span className="text-lg font-bold text-white">{totalEntries}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Nama Unik</span>
            <span className="text-lg font-bold text-purple-300">{uniqueNamesCount}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Implemented</span>
            <span className="text-lg font-bold text-emerald-400">{statusCounts.IMPLEMENTED}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Blocked (Aman)</span>
            <span className="text-lg font-bold text-rose-400">{statusCounts.BLOCKED}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Butuh API</span>
            <span className="text-lg font-bold text-amber-400">{statusCounts.NEEDS_API}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-[11px] text-slate-400 block mb-0.5">Duplikasi</span>
            <span className="text-lg font-bold text-slate-300">{duplicateEntriesCount}</span>
          </div>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari command (nama, deskripsi, alias)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {statusFilters.map((st) => (
              <button
                key={st.key}
                onClick={() => setSelectedStatus(st.key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedStatus === st.key
                    ? 'bg-purple-600 text-white shadow'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:block" />
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition ${
                selectedCategory === cat.key
                  ? 'bg-purple-950 text-purple-200 border border-purple-700 font-bold'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Table */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Nama Command</th>
                <th className="py-3.5 px-4">Kategori</th>
                <th className="py-3.5 px-4">Deskripsi</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Hak Akses</th>
                <th className="py-3.5 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filtered.map((item) => {
                const isBlocked = item.status === 'BLOCKED';
                const isImplemented = item.status === 'IMPLEMENTED';
                const isEnabled = enabledPlugins.has(item.name);

                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-800/40 transition ${
                      isBlocked ? 'bg-rose-950/10' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-white flex items-center gap-1.5">
                      <span>{prefix}{item.name}</span>
                      {item.isDuplicate && (
                        <span
                          title={`Duplikasi ${item.duplicateCount}x di referensi asal`}
                          className="px-1.5 py-0.2 rounded text-[9px] bg-slate-800 text-amber-300 border border-slate-700"
                        >
                          Dup
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 uppercase text-[10px] font-semibold text-purple-300">
                      {item.category}
                    </td>
                    <td className="py-3 px-4 max-w-xs text-slate-300 truncate">
                      {item.description}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      {getStatusBadge(item.status)}
                    </td>
                    <td className="py-3 px-4 capitalize">
                      {item.permissions.join(', ')}
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        {isImplemented && onTogglePlugin && (
                          <button
                            onClick={() => onTogglePlugin(item.name, !isEnabled)}
                            role="switch"
                            aria-checked={isEnabled}
                            aria-label={`Toggle ${item.name}`}
                            className={`relative inline-flex h-4 w-7 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                              isEnabled ? 'bg-purple-600' : 'bg-slate-700'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                isEnabled ? 'translate-x-3' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        )}
                        <button
                          onClick={() => setDetailModalItem(item)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-semibold border border-slate-700 transition"
                        >
                          Detail
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
          Tidak ada command yang sesuai dengan pencarian atau filter yang dipilih.
        </div>
      )}

      {/* Command Detail Modal */}
      {detailModalItem && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400">
                  Dokumentasi Spesifikasi Command
                </span>
                <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                  <span>{prefix}{detailModalItem.name}</span>
                  {getStatusBadge(detailModalItem.status)}
                </h3>
              </div>
              <button
                onClick={() => setDetailModalItem(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
                aria-label="Tutup detail modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {detailModalItem.description}
            </p>

            {detailModalItem.blockedReason && (
              <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-900/60 text-xs text-rose-200 leading-relaxed space-y-1">
                <span className="font-bold text-rose-300 block flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Kebijakan Keamanan & Privasi (Section 10 & G):
                </span>
                <p>{detailModalItem.blockedReason}</p>
              </div>
            )}

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-slate-400 block font-semibold">Format Penggunaan (Usage):</span>
                <code className="text-purple-300 font-mono text-sm block">
                  {detailModalItem.usage?.replace('{prefix}', prefix) || `${prefix}${detailModalItem.name}`}
                </code>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Nama Asli Referensi</span>
                  <span className="font-semibold text-slate-200 font-mono">{detailModalItem.originalName}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Kategori Asal</span>
                  <span className="font-semibold text-slate-200 uppercase">{detailModalItem.category}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Hak Izin (Permission)</span>
                  <span className="font-semibold text-slate-200 capitalize">{detailModalItem.permissions.join(', ')}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block">Kebutuhan API Eksternal</span>
                  <span className={`font-semibold ${detailModalItem.requiresApi ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {detailModalItem.requiresApi ? 'Memerlukan API' : 'Lokal (Rp0)'}
                  </span>
                </div>
              </div>

              {detailModalItem.aliases && detailModalItem.aliases.length > 0 && (
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block mb-1">Alias Terdaftar:</span>
                  <div className="flex flex-wrap gap-1">
                    {detailModalItem.aliases.map((a) => (
                      <span key={a} className="px-2 py-0.5 rounded bg-slate-800 text-purple-300 font-mono text-[11px]">
                        {prefix}{a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {detailModalItem.notes && (
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 block font-semibold mb-0.5">Catatan Audit:</span>
                  <span className="text-slate-300">{detailModalItem.notes}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setDetailModalItem(null)}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
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
