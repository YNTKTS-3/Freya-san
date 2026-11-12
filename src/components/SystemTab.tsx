/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Cpu,
  HardDrive,
  Activity,
  Server,
  RefreshCw,
  Clock,
  Layers,
} from 'lucide-react';
import { api } from '../services/api.ts';

export const SystemTab: React.FC = () => {
  const [stats, setStats] = useState<any>({
    nodeVersion: 'v22.14.0',
    platform: 'linux',
    arch: 'x64',
    processUptime: 0,
    systemUptime: 0,
    totalMemoryMb: 2048,
    freeMemoryMb: 1420,
    heapUsedMb: 64,
    heapTotalMb: 128,
    rssMb: 110,
    cpuCount: 2,
    loadAvg: [0.15, 0.22, 0.18],
  });
  const [loading, setLoading] = useState(false);

  const loadStats = async () => {
    setLoading(true);
    try {
      const data = await api.getSystemStats();
      setStats(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
    const interval = setInterval(loadStats, 10000);
    return () => clearInterval(interval);
  }, []);

  const usedMemMb = stats.totalMemoryMb - stats.freeMemoryMb;
  const memPercent = Math.round((usedMemMb / (stats.totalMemoryMb || 1)) * 100);
  const heapPercent = Math.round((stats.heapUsedMb / (stats.heapTotalMb || 1)) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            <span>Pemantauan Sistem & Sumber Daya (System Monitor)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Status pemakaian CPU, memori RAM Node.js heap, dan spesifikasi server hosting bot.
          </p>
        </div>
        <button
          onClick={loadStats}
          disabled={loading}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>Segarkan Data</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Memory Gauge */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">RAM Server</span>
            <HardDrive className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">{memPercent}%</span>
              <span className="text-xs text-slate-400">({usedMemMb} / {stats.totalMemoryMb} MB)</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full mt-2 overflow-hidden border border-slate-800">
              <div
                className="bg-purple-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, memPercent)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Node Heap */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Node Heap Memory</span>
            <Activity className="w-4 h-4 text-pink-400" />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">{stats.heapUsedMb} MB</span>
              <span className="text-xs text-slate-400">dari {stats.heapTotalMb} MB</span>
            </div>
            <div className="w-full bg-slate-950 h-2 rounded-full mt-2 overflow-hidden border border-slate-800">
              <div
                className="bg-pink-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, heapPercent)}%` }}
              />
            </div>
          </div>
        </div>

        {/* CPU Cores & Load */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">CPU Load (1m, 5m, 15m)</span>
            <Cpu className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <span className="text-xl font-bold text-white font-mono">
              {stats.loadAvg?.[0]?.toFixed(2) || '0.12'}
            </span>
            <span className="text-xs text-slate-400 block mt-1">
              {stats.cpuCount} Core vCPU ({stats.arch})
            </span>
          </div>
        </div>

        {/* Process Uptime */}
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Node Process Uptime</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-xl font-bold text-white">
              {Math.floor(stats.processUptime / 60)} Menit
            </span>
            <span className="text-xs text-slate-400 block mt-1">
              Status: Active & Healthy
            </span>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Server className="w-4 h-4 text-purple-400" />
          <span>Informasi Lingkungan Server & Runtime</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Versi Node.js</span>
            <span className="font-semibold text-purple-300 font-mono">{stats.nodeVersion}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Sistem Operasi</span>
            <span className="font-semibold text-slate-200 capitalize">
              {stats.platform} ({stats.arch})
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Resident Set Size (RSS)</span>
            <span className="font-semibold text-slate-200 font-mono">{stats.rssMb} MB</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Proses Manager Rekomendasi</span>
            <span className="font-semibold text-slate-200">PM2 (Process Manager 2)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Database Mode</span>
            <span className="font-semibold text-slate-200">Storage Store (SQLite & JSON Ready)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Kesiapan VPS / Android</span>
            <span className="font-semibold text-emerald-400">100% Compatible (Rp0 Budget)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
