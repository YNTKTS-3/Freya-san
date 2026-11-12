/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Database,
  Download,
  Upload,
  CheckCircle,
  AlertTriangle,
  FileText,
  ShieldCheck,
} from 'lucide-react';

interface BackupTabProps {
  onDownloadBackup: () => Promise<string>;
  onRestoreBackup: (jsonStr: string) => Promise<boolean>;
}

export const BackupTab: React.FC<BackupTabProps> = ({
  onDownloadBackup,
  onRestoreBackup,
}) => {
  const [restoreInput, setRestoreInput] = useState('');
  const [isRestoring, setIsRestoring] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleDownload = async () => {
    try {
      const data = await onDownloadBackup();
      const blob = new Blob([data], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ujanbot-snapshot-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setStatusMsg({ type: 'success', text: 'Snapshot database berhasil diunduh!' });
    } catch {
      setStatusMsg({ type: 'error', text: 'Gagal mengunduh file snapshot backup.' });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setRestoreInput(content);
    };
    reader.readAsText(file);
  };

  const handleExecuteRestore = async () => {
    if (!restoreInput.trim()) {
      setStatusMsg({ type: 'error', text: 'Harap masukkan data JSON backup terlebih dahulu.' });
      return;
    }

    setIsRestoring(true);
    setStatusMsg(null);
    try {
      const success = await onRestoreBackup(restoreInput);
      if (success) {
        setStatusMsg({ type: 'success', text: '✅ Pemulihan (Restore) sistem berhasil diterapkan!' });
        setRestoreInput('');
      } else {
        setStatusMsg({ type: 'error', text: 'Format data backup tidak valid. Mohon periksa kembali JSON.' });
      }
    } catch {
      setStatusMsg({ type: 'error', text: 'Terjadi error saat memulihkan database.' });
    } finally {
      setIsRestoring(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Database className="w-5 h-5 text-purple-400" />
          <span>Cadangan (Backup) & Pemulihan (Restore)</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Simpan snapshot data konfigurasi bot, pengaturan grup, status plugin, dan pulihkan kapan saja tanpa kehilangan data.
        </p>
      </div>

      {statusMsg && (
        <div
          className={`p-4 rounded-xl border text-sm flex items-center gap-2.5 ${
            statusMsg.type === 'success'
              ? 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              : 'bg-rose-950/60 border-rose-800 text-rose-200'
          }`}
        >
          {statusMsg.type === 'success' ? (
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
          )}
          <span>{statusMsg.text}</span>
        </div>
      )}

      {/* Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Create Backup */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <Download className="w-5 h-5 text-purple-400" />
              <span>Ekspor Snapshot Database</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Menghasilkan berkas cadangan snapshot format JSON terenkripsi yang berisi seluruh konfigurasi bot, status plugin, dan data grup.
            </p>
            <div className="space-y-2 text-xs text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-slate-300">
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Isi Snapshot:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1">
                <li>Konfigurasi Bot (Prefix, Nama, Owner)</li>
                <li>Pengaturan Grup (Welcome & Antilink status)</li>
                <li>Plugin registry flags</li>
              </ul>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Backup Snapshot (.json)</span>
          </button>
        </div>

        {/* Restore Backup */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
              <Upload className="w-5 h-5 text-emerald-400" />
              <span>Pulihkan (Restore) dari Snapshot</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Unggah file JSON atau tempel teks snapshot cadangan untuk mengembalikan pengaturan sistem ke kondisi sebelumnya.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Pilih file snapshot JSON:
                </label>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleFileUpload}
                  className="w-full text-xs text-slate-400 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-slate-800 file:text-purple-300 hover:file:bg-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Atau paste data JSON:
                </label>
                <textarea
                  rows={3}
                  value={restoreInput}
                  onChange={(e) => setRestoreInput(e.target.value)}
                  placeholder='{"version": "1.0.0", "config": {...}}'
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleExecuteRestore}
            disabled={isRestoring || !restoreInput.trim()}
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold text-xs transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
          >
            <Upload className="w-4 h-4" />
            <span>{isRestoring ? 'Memulihkan...' : 'Jalankan Pemulihan Database'}</span>
          </button>
        </div>
      </div>

      {/* Security notice */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
        <ShieldCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-300">Proteksi Kredensial WhatsApp: </span>
          Kredensial auth token WhatsApp disimpan terpisah dan tidak pernah dicampur dalam snapshot JSON publik untuk mencegah kebocoran sesi akun.
        </div>
      </div>
    </div>
  );
};
