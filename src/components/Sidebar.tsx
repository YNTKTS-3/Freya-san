/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  LayoutDashboard,
  QrCode,
  MessageSquare,
  Puzzle,
  BookOpen,
  Settings,
  Users,
  Terminal,
  Database,
  Cpu,
  HelpCircle,
  X,
} from 'lucide-react';

export type TabKey =
  | 'overview'
  | 'whatsapp'
  | 'simulator'
  | 'plugins'
  | 'catalog'
  | 'settings'
  | 'groups'
  | 'logs'
  | 'backup'
  | 'system'
  | 'guide';

interface SidebarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  isOpen: boolean;
  onClose: () => void;
  enabledPluginsCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpen,
  onClose,
  enabledPluginsCount,
}) => {
  const navItems: { key: TabKey; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      key: 'overview',
      label: 'Overview',
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      key: 'whatsapp',
      label: 'Koneksi WhatsApp',
      icon: <QrCode className="w-4 h-4" />,
      badge: 'QR / Code',
    },
    {
      key: 'simulator',
      label: 'Chat Simulator',
      icon: <MessageSquare className="w-4 h-4" />,
      badge: 'Live Test',
    },
    {
      key: 'plugins',
      label: 'Plugin Manager',
      icon: <Puzzle className="w-4 h-4" />,
      badge: `${enabledPluginsCount}`,
    },
    {
      key: 'catalog',
      label: 'Katalog Command',
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      key: 'settings',
      label: 'Pengaturan Bot',
      icon: <Settings className="w-4 h-4" />,
    },
    {
      key: 'groups',
      label: 'Manajemen Grup',
      icon: <Users className="w-4 h-4" />,
    },
    {
      key: 'logs',
      label: 'Live Terminal Logs',
      icon: <Terminal className="w-4 h-4" />,
    },
    {
      key: 'backup',
      label: 'Backup & Restore',
      icon: <Database className="w-4 h-4" />,
    },
    {
      key: 'system',
      label: 'System Monitor',
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      key: 'guide',
      label: 'Panduan Pak Ujan',
      icon: <HelpCircle className="w-4 h-4" />,
      badge: 'Android/VPS',
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-lg">
              UjanBot Cloud
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white lg:hidden"
            aria-label="Tutup menu navigasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => {
                  onSelectTab(item.key);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-purple-800 text-white'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800 bg-slate-900/60 text-xs text-slate-400">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-300 font-medium">Freya-san v1.2.0</span>
            <span className="text-emerald-400 text-[11px]">Online</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Arsitektur Baileys Modular & Plugin Registry
          </p>
        </div>
      </aside>
    </>
  );
};
