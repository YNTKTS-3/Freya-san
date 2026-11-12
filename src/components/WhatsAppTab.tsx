/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  QrCode,
  Smartphone,
  CheckCircle,
  RefreshCw,
  PowerOff,
  BatteryCharging,
  ShieldCheck,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { WhatsAppSessionInfo } from '../core/types.ts';

interface WhatsAppTabProps {
  session: WhatsAppSessionInfo;
  onRequestQr: () => Promise<void>;
  onRequestCode: (phone: string) => Promise<string>;
  onConnectSimulated: (phone?: string, pushName?: string) => Promise<void>;
  onDisconnect: () => Promise<void>;
  onReconnect: () => Promise<void>;
  ownerPhone: string;
}

export const WhatsAppTab: React.FC<WhatsAppTabProps> = ({
  session,
  onRequestQr,
  onRequestCode,
  onConnectSimulated,
  onDisconnect,
  onReconnect,
  ownerPhone,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(ownerPhone || '6281234567890');
  const [pairingMethod, setPairingMethod] = useState<'qr' | 'code'>('qr');
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<string | null>(session.pairingCode);
  const [copied, setCopied] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const isConnected = session.status === 'CONNECTED';

  const handleGetQr = async () => {
    setLoading(true);
    setFeedbackMsg(null);
    try {
      await onRequestQr();
      setFeedbackMsg('Kode QR baru berhasil di-generate! Buka WhatsApp > Perangkat Tertaut > Tautkan Perangkat.');
    } catch {
      setFeedbackMsg('Gagal menghasilkan QR code.');
    } finally {
      setLoading(false);
    }
  };

  const handleGetCode = async () => {
    if (!phoneNumber || phoneNumber.length < 9) {
      setFeedbackMsg('Masukkan nomor WhatsApp yang valid dengan kode negara (contoh: 62812xxxxxx)');
      return;
    }
    setLoading(true);
    setFeedbackMsg(null);
    try {
      const code = await onRequestCode(phoneNumber);
      setGeneratedCode(code);
      setFeedbackMsg('Kode Pairing 8-digit dibuat! Masukkan kode ini pada notifikasi WhatsApp di HP Anda.');
    } catch {
      setFeedbackMsg('Gagal membuat kode pairing.');
    } finally {
      setLoading(false);
    }
  };

  const handleSimulateLogin = async () => {
    setLoading(true);
    try {
      await onConnectSimulated(phoneNumber, 'Freya-san Bot');
      setFeedbackMsg('✅ Sesi WhatsApp berhasil terhubung!');
    } finally {
      setLoading(false);
    }
  };

  const copyCode = () => {
    if (generatedCode) {
      navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-white tracking-tight">Koneksi WhatsApp & Pengelolaan Sesi</h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Hubungkan akun WhatsApp Freya-san Bot melalui pemindaian QR Code resmi atau 8-Digit Pairing Code (cocok untuk HP Android).
        </p>
      </div>

      {feedbackMsg && (
        <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-800 text-purple-200 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <span>{feedbackMsg}</span>
        </div>
      )}

      {/* Connection State Card */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                isConnected
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border border-slate-700'
              }`}
            >
              <Smartphone className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Status Sesi WhatsApp</h3>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                    isConnected
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                  }`}
                >
                  {session.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isConnected
                  ? `Terhubung sebagai ${session.pushName || 'Freya-san'} (+${session.connectedPhone})`
                  : 'Belum ada perangkat WhatsApp yang ditautkan.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {isConnected ? (
              <>
                <button
                  onClick={onReconnect}
                  disabled={loading}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-2 transition"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-purple-400" />
                  <span>Cek Ping / Reconnect</span>
                </button>
                <button
                  onClick={onDisconnect}
                  disabled={loading}
                  className="px-3 py-2 rounded-xl bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 text-xs font-medium border border-rose-600/30 flex items-center gap-2 transition"
                >
                  <PowerOff className="w-3.5 h-3.5" />
                  <span>Putuskan Sesi</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleSimulateLogin}
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition shadow-lg shadow-emerald-600/20"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Simulasikan Sambungan Aktif</span>
              </button>
            )}
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 text-xs">
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Nomor Akun</span>
            <span className="font-semibold text-slate-200">
              {session.connectedPhone ? `+${session.connectedPhone}` : 'Belum Terhubung'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Nama Profil</span>
            <span className="font-semibold text-slate-200">
              {session.pushName || 'Freya-san bot by Pak Ujan'}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Baterai Perangkat</span>
            <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
              <BatteryCharging className="w-3.5 h-3.5" />
              {session.batteryLevel || 94}% (Mengisi)
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
            <span className="text-slate-400 block mb-1">Koneksi Terakhir</span>
            <span className="font-semibold text-slate-200 truncate block">
              {session.lastConnectedAt || 'Sesi Baru'}
            </span>
          </div>
        </div>
      </div>

      {/* Pairing Panel (QR or Pairing Code) */}
      {!isConnected && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div>
              <h3 className="text-base font-bold text-white">Metode Penautan Perangkat</h3>
              <p className="text-xs text-slate-400">Pilih metode yang paling nyaman untuk HP Anda</p>
            </div>
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => setPairingMethod('qr')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  pairingMethod === 'qr'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Scan QR Code
              </button>
              <button
                onClick={() => setPairingMethod('code')}
                className={`px-3 py-1.5 rounded-lg font-medium transition ${
                  pairingMethod === 'code'
                    ? 'bg-purple-600 text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Pairing Code 8-Digit
              </button>
            </div>
          </div>

          {pairingMethod === 'qr' ? (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              {session.qrCodeDataUrl ? (
                <div className="p-4 bg-white rounded-2xl shadow-xl shadow-purple-950/40 inline-block mb-4">
                  <img
                    src={session.qrCodeDataUrl}
                    alt="WhatsApp QR Code"
                    className="w-56 h-56 mx-auto rounded-lg"
                  />
                </div>
              ) : (
                <div className="w-56 h-56 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-slate-400 mb-4 p-4">
                  <QrCode className="w-12 h-12 text-slate-600 mb-2" />
                  <span className="text-xs">Klik tombol di bawah untuk membuat QR Code penautan</span>
                </div>
              )}

              <div className="space-y-3 max-w-md">
                <button
                  onClick={handleGetQr}
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold transition shadow-lg shadow-purple-600/30 flex items-center gap-2 mx-auto"
                >
                  <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                  <span>Generate QR Code Baru</span>
                </button>
                <div className="text-xs text-slate-400 text-left bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                  <p className="font-semibold text-slate-300">Cara Menautkan lewat QR:</p>
                  <p>1. Buka aplikasi WhatsApp di HP Anda.</p>
                  <p>2. Tekan menu titik tiga (⋮) di pojok kanan atas &gt; Perangkat Tertaut.</p>
                  <p>3. Tekan "Tautkan Perangkat" lalu arahkan kamera ke QR Code di atas.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Nomor WhatsApp Bot (dengan kode negara)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Contoh: 6281234567890"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
                  />
                  <button
                    onClick={handleGetCode}
                    disabled={loading}
                    className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition whitespace-nowrap"
                  >
                    Minta Kode
                  </button>
                </div>
              </div>

              {generatedCode && (
                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800 text-center">
                  <span className="text-xs text-purple-300 block mb-1">Kode Pairing WhatsApp Anda:</span>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl font-mono font-extrabold tracking-widest text-white">
                      {generatedCode}
                    </span>
                    <button
                      onClick={copyCode}
                      className="p-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-purple-200 transition"
                      aria-label="Salin Kode Pairing"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <div className="text-xs text-slate-400 bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1">
                <p className="font-semibold text-slate-300">Cara Pairing dengan Nomor HP:</p>
                <p>1. Tekan "Perangkat Tertaut" di WhatsApp HP Anda.</p>
                <p>2. Pilih "Tautkan dengan nomor telepon saja".</p>
                <p>3. Masukkan kode 8 digit yang muncul di atas saat diminta notifikasi WhatsApp.</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Security notice */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-slate-300">Penyimpanan Kredensial Aman: </span>
          Kredensial sesi auth disimpan secara lokal dan terisolasi. Sistem tidak pernah mengekspos token sesi, kunci enkripsi, atau nomor pribadi kepada publik.
        </div>
      </div>
    </div>
  );
};
