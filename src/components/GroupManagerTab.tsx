/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Users,
  Shield,
  MessageSquare,
  Edit3,
  Check,
  Plus,
} from 'lucide-react';
import { GroupConfig } from '../core/types.ts';

interface GroupManagerTabProps {
  groups: GroupConfig[];
  onUpdateGroup: (id: string, update: Partial<GroupConfig>) => Promise<void>;
}

export const GroupManagerTab: React.FC<GroupManagerTabProps> = ({
  groups,
  onUpdateGroup,
}) => {
  const [editingGroup, setEditingGroup] = useState<GroupConfig | null>(null);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleToggleWelcome = async (group: GroupConfig) => {
    await onUpdateGroup(group.id, { welcome: !group.welcome });
  };

  const handleToggleAntilink = async (group: GroupConfig) => {
    await onUpdateGroup(group.id, { antilink: !group.antilink });
  };

  const handleSaveEdit = async () => {
    if (!editingGroup) return;
    await onUpdateGroup(editingGroup.id, editingGroup);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setEditingGroup(null);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            <span>Manajemen Grup WhatsApp</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Konfigurasi perlindungan Anti-Link, Welcome Greetings, dan peraturan spesifik untuk setiap grup yang dimasuki oleh Freya-san Bot.
          </p>
        </div>
        <div className="text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
          Grup Terdata: <strong className="text-white">{groups.length} Grup</strong>
        </div>
      </div>

      {/* Groups List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/60 text-purple-300 border border-purple-800 flex items-center justify-center font-bold text-sm">
                    WA
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{group.name}</h3>
                    <span className="text-[11px] font-mono text-slate-400 truncate max-w-[200px] block">
                      {group.id}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setEditingGroup({ ...group })}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                  aria-label={`Edit ${group.name}`}
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Toggles */}
              <div className="space-y-2 mt-4 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>Proteksi Anti-Link</span>
                  </div>
                  <button
                    onClick={() => handleToggleAntilink(group)}
                    className={`px-3 py-1 rounded-lg font-semibold text-[11px] transition ${
                      group.antilink
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {group.antilink ? 'AKTIF' : 'NONAKTIF'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MessageSquare className="w-4 h-4 text-pink-400" />
                    <span>Pesan Welcome Member</span>
                  </div>
                  <button
                    onClick={() => handleToggleWelcome(group)}
                    className={`px-3 py-1 rounded-lg font-semibold text-[11px] transition ${
                      group.welcome
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {group.welcome ? 'AKTIF' : 'NONAKTIF'}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-400 block mb-0.5">Rules Grup:</span>
              <p className="line-clamp-2 text-slate-400 italic">
                {group.rules || 'Belum ada aturan khusus.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Group Modal */}
      {editingGroup && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white">Edit Konfigurasi Grup</h3>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Nama Grup</label>
              <input
                type="text"
                value={editingGroup.name}
                onChange={(e) => setEditingGroup({ ...editingGroup, name: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Peraturan Grup (Rules)</label>
              <textarea
                rows={4}
                value={editingGroup.rules}
                onChange={(e) => setEditingGroup({ ...editingGroup, rules: e.target.value })}
                className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setEditingGroup(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Batal
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : null}
                <span>{savedSuccess ? 'Tersimpan!' : 'Simpan Grup'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
