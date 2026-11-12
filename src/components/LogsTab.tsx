/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Terminal,
  Search,
  Trash2,
  Download,
  Filter,
  RefreshCw,
} from 'lucide-react';
import { LogMessage } from '../core/types.ts';

interface LogsTabProps {
  logs: LogMessage[];
  onClearLogs: () => Promise<void>;
  onRefreshLogs: () => Promise<void>;
}

export const LogsTab: React.FC<LogsTabProps> = ({
  logs,
  onClearLogs,
  onRefreshLogs,
}) => {
  const [levelFilter, setLevelFilter] = useState<string>('ALL');
  const [search, setSearch] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filtered = logs.filter((log) => {
    const matchLevel = levelFilter === 'ALL' || log.level === levelFilter;
    const matchSearch =
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.source.toLowerCase().includes(search.toLowerCase());
    return matchLevel && matchSearch;
  });

  const handleDownloadLogs = () => {
    const textContent = logs
      .map((l) => `[${l.timestamp}] [${l.level}] [${l.source}] ${l.message}`)
      .join('\n');
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `freya-bot-logs-${Date.now()}.log`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    await onRefreshLogs();
    setTimeout(() => setIsRefreshing(false), 500);
  };

  return (
    <div className="space-y-4">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Terminal className="w-5 h-5 text-purple-400" />
            <span>Live Terminal & Activity Logs</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Pantau seluruh eksekusi command, event Baileys adapter, peringatan sistem, dan error secara real-time.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleManualRefresh}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            aria-label="Refresh Logs"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
          <button
            onClick={handleDownloadLogs}
            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>Download Log</span>
          </button>
          <button
            onClick={onClearLogs}
            className="p-2 rounded-xl bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-900/50 transition"
            aria-label="Bersihkan Logs"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari dalam log..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto">
          {['ALL', 'CMD', 'INFO', 'WARN', 'ERROR'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                levelFilter === lvl
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="rounded-2xl bg-[#0d1117] border border-slate-800 overflow-hidden font-mono text-xs shadow-2xl">
        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-slate-400 font-sans text-xs">freya-bot-stdout.log</span>
          </div>
          <span className="text-[11px] text-slate-400 font-sans">
            Menampilkan {filtered.length} baris
          </span>
        </div>

        <div className="p-4 h-[440px] overflow-y-auto space-y-1.5 text-slate-300">
          {filtered.map((log) => {
            const levelColor =
              log.level === 'CMD'
                ? 'text-purple-400'
                : log.level === 'ERROR'
                ? 'text-rose-400'
                : log.level === 'WARN'
                ? 'text-amber-400'
                : 'text-sky-400';

            return (
              <div key={log.id} className="leading-relaxed hover:bg-slate-800/30 px-1 py-0.5 rounded">
                <span className="text-slate-400 mr-2">{log.timestamp}</span>
                <span className={`font-bold mr-2 ${levelColor}`}>[{log.level}]</span>
                <span className="text-purple-300 mr-2">[{log.source}]</span>
                <span className="text-slate-200">{log.message}</span>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-12 text-slate-400 font-sans">
              Tidak ada riwayat log yang sesuai dengan filter.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
