/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Activity,
  CheckCircle2,
  Cpu,
  Clock,
  Layers,
  ShieldAlert,
  Smartphone,
  Terminal,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppConnectionStatus, LogMessage, BotConfig } from '../core/types.ts';
import { TabKey } from './Sidebar.tsx';

interface OverviewTabProps {
  status: {
    name: string;
    uptimeFormatted: string;
    totalPlugins: number;
    enabledPlugins: number;
    whatsappStatus: WhatsAppConnectionStatus;
    connectedPhone: string | null;
    prefix: string;
    owner: string;
  };
  recentLogs: LogMessage[];
  config: BotConfig;
  onNavigate: (tab: TabKey) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({
  status,
  recentLogs,
  config,
  onNavigate,
}) => {
  const isConnected = status.whatsappStatus === 'CONNECTED';

  return (
    <div className="space-y-6">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/60 via-slate-900 to-slate-900 border border-purple-800/40 p-6 md:p-8">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 mb-3">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            Platform Hosting WhatsApp Bot Pribadi
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Selamat Datang di <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">48Group Bot Cloud</span>
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-300">
            Pusat kendali <strong className="text-white">Freya-san bot by Pak Ujan</strong>. Dilengkapi arsitektur modular, 30 plugin siap pakai, live simulator, proteksi grup anti-link, dan pairing WhatsApp resmi.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('simulator')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition shadow-lg shadow-purple-600/30"
            >
              <span>Uji Command di Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('whatsapp')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm transition"
            >
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span>Status Koneksi WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Status WhatsApp */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Status WhatsApp</p>
            <h3 className="mt-1 text-lg font-bold text-white flex items-center gap-2">
              {isConnected ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Terhubung</span>
                </>
              ) : (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span>{status.whatsappStatus}</span>
                </>
              )}
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              {isConnected ? `+${status.connectedPhone}` : 'Scan QR untuk hubungkan'}
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
            <Smartphone className="w-5 h-5" />
          </div>
        </div>

        {/* Plugin Status */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Plugin Terpasang</p>
            <h3 className="mt-1 text-lg font-bold text-white">
              {status.enabledPlugins} / {status.totalPlugins} Aktif
            </h3>
            <p className="mt-1 text-xs text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>30 Command Prioritas Siap</span>
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        {/* Bot Uptime */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Runtime Sistem</p>
            <h3 className="mt-1 text-lg font-bold text-white truncate max-w-[170px]">
              {status.uptimeFormatted}
            </h3>
            <p className="mt-1 text-xs text-slate-400">Auto-recovery & Keepalive</p>
          </div>
          <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        {/* Config & Security */}
        <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex items-start justify-between">
          <div>
            <p className="text-xs font-medium text-slate-400">Prefix & Owner</p>
            <h3 className="mt-1 text-lg font-bold text-white">
              Prefix [ {config.prefix} ]
            </h3>
            <p className="mt-1 text-xs text-purple-300">
              {config.ownerName}
            </p>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Cpu className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Security & Health Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Security Policy Card */}
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">Kebijakan Keamanan (Section 10)</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Bot menerapkan kepatuhan ketat terhadap privasi dan keamanan pengguna WhatsApp. Seluruh fitur berisiko tinggi diblokir secara permanen:
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-rose-300 bg-rose-950/40 p-2 rounded-lg border border-rose-900/40">
              <span className="font-bold">BLOCKED:</span>
              <span>fakebca, fakedana (Anti Pemalsuan Finansial)</span>
            </div>
            <div className="flex items-center gap-2 text-rose-300 bg-rose-950/40 p-2 rounded-lg border border-rose-900/40">
              <span className="font-bold">BLOCKED:</span>
              <span>grabcontact, readviewonce (Anti Pelanggaran Privasi)</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300 bg-emerald-950/40 p-2 rounded-lg border border-emerald-900/40">
              <span className="font-bold">ACTIVE:</span>
              <span>Anti-link proteksi grup & Role Based Access Control</span>
            </div>
          </div>
          <button
            onClick={() => onNavigate('catalog')}
            className="w-full text-center text-xs font-medium text-purple-400 hover:text-purple-300 py-1 transition"
          >
            Lihat Status Semua 100+ Command di Katalog &rarr;
          </button>
        </div>

        {/* Real-time Activity Stream Preview */}
        <div className="lg:col-span-2 p-6 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                <h3 className="text-base font-bold text-white">Log Aktivitas Terbaru</h3>
              </div>
              <button
                onClick={() => onNavigate('logs')}
                className="text-xs font-medium text-purple-400 hover:text-purple-300"
              >
                Buka Terminal Lengkap &rarr;
              </button>
            </div>

            <div className="space-y-2 max-h-48 overflow-y-auto font-mono text-xs">
              {recentLogs.slice(0, 5).map((log) => (
                <div
                  key={log.id}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-slate-300"
                >
                  <span className="text-slate-400 font-sans text-[11px] whitespace-nowrap">
                    {log.timestamp}
                  </span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      log.level === 'CMD'
                        ? 'bg-purple-900/60 text-purple-300'
                        : log.level === 'ERROR'
                        ? 'bg-rose-900/60 text-rose-300'
                        : log.level === 'WARN'
                        ? 'bg-amber-900/60 text-amber-300'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {log.level}
                  </span>
                  <span className="text-slate-400">[{log.source}]</span>
                  <span className="text-slate-200 truncate flex-1">{log.message}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Sistem: Node.js Baileys Adapter + SQLite Ready</span>
            <span className="text-purple-400 font-semibold">100% Private & Single Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};
