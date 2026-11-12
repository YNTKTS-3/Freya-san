/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Menu, Shield, Smartphone, RefreshCw, Radio } from 'lucide-react';
import { WhatsAppConnectionStatus } from '../core/types.ts';

interface NavbarProps {
  onToggleSidebar: () => void;
  whatsappStatus: WhatsAppConnectionStatus;
  connectedPhone: string | null;
  botName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onToggleSidebar,
  whatsappStatus,
  connectedPhone,
  botName,
}) => {
  const getStatusBadge = () => {
    switch (whatsappStatus) {
      case 'CONNECTED':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Terhubung ({connectedPhone ? `+${connectedPhone}` : 'WhatsApp Web'})
          </span>
        );
      case 'CONNECTING':
      case 'RECONNECTING':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            <RefreshCw className="w-3 h-3 animate-spin" />
            Menghubungkan...
          </span>
        );
      case 'PAIRING_QR':
      case 'PAIRING_CODE':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/30">
            <Smartphone className="w-3 h-3 animate-bounce" />
            Menunggu Pairing
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/30">
            <Radio className="w-3 h-3" />
            Terputus (Offline)
          </span>
        );
    }
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 md:px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation Menu"
          className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition lg:hidden"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-600 to-rose-500 flex items-center justify-center shadow-lg shadow-purple-500/20 font-bold text-lg text-white">
            48
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-white text-base">48Group Bot</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Cloud
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block truncate max-w-[220px]">
              {botName}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">{getStatusBadge()}</div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/60">
          <Shield className="w-3.5 h-3.5 text-purple-400" />
          <span className="hidden md:inline">Admin:</span>
          <span className="font-medium text-slate-200">Pak Ujan</span>
        </div>
      </div>
    </header>
  );
};
