/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Send,
  User,
  Users,
  Shield,
  Trash2,
  CheckCheck,
  Sparkles,
  Bot,
  HelpCircle,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  senderName: string;
  text: string;
  timestamp: string;
  isError?: boolean;
}

interface SimulatorTabProps {
  onSendMessage: (payload: {
    text: string;
    isGroup: boolean;
    isAdmin: boolean;
    isOwner: boolean;
    senderName: string;
  }) => Promise<{ replies: string[]; handled: boolean }>;
  prefix: string;
}

export const SimulatorTab: React.FC<SimulatorTabProps> = ({
  onSendMessage,
  prefix,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      senderName: 'Freya-san Bot',
      text: `🌸 Konnichiwa! Saya *Freya-san Bot by Pak Ujan*.\nKetik *${prefix}menu* untuk melihat seluruh perintah aktif atau klik rekomendasi di bawah! ✨`,
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isGroup, setIsGroup] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isOwner, setIsOwner] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textToSend?: string) => {
    const raw = textToSend || inputText;
    if (!raw.trim() || isSending) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(2, 9),
      sender: 'user',
      senderName: isOwner ? 'Pak Ujan (Owner)' : isAdmin ? 'Admin Grup' : 'Member',
      text: raw.trim(),
      timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsSending(true);

    try {
      const res = await onSendMessage({
        text: raw.trim(),
        isGroup,
        isAdmin,
        isOwner,
        senderName: userMsg.senderName,
      });

      if (res.replies && res.replies.length > 0) {
        const botMsgs: ChatMessage[] = res.replies.map((replyText) => ({
          id: Math.random().toString(36).substring(2, 9),
          sender: 'bot',
          senderName: 'Freya-san Bot',
          text: replyText,
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
        }));
        setMessages((prev) => [...prev, ...botMsgs]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 9),
          sender: 'bot',
          senderName: 'System',
          text: '⚠️ Terjadi kesalahan saat memproses perintah.',
          timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          isError: true,
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'reset-1',
        sender: 'bot',
        senderName: 'Freya-san Bot',
        text: `🌸 Riwayat simulasi obrolan dibersihkan.\nKetik *${prefix}menu* untuk memulai kembali.`,
        timestamp: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const sampleCommands = [
    `${prefix}menu`,
    `${prefix}tebakmember`,
    `${prefix}tebakjiko`,
    `${prefix}trivia48`,
    `${prefix}gachakartu`,
    `${prefix}koleksikartu`,
    `${prefix}misiharian`,
    `${prefix}leaderboard48`,
    `${prefix}ping`,
    `${prefix}infobot`,
    `${prefix}brat 48Group Freya`,
    `${prefix}qrcode https://paujan_bot.com`,
    `${prefix}welcome on`,
  ];

  return (
    <div className="space-y-4">
      {/* Top Header & Simulation Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Bot className="w-5 h-5 text-purple-400" />
            <span>Interactive WhatsApp Chat Simulator</span>
          </h2>
          <p className="text-xs text-slate-400">
            Uji coba langsung seluruh command Freya-san Bot seperti di aplikasi WhatsApp sungguhan.
          </p>
        </div>

        {/* Sim Controls */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Chat Mode Toggle */}
          <button
            onClick={() => setIsGroup(!isGroup)}
            className={`px-3 py-1.5 rounded-xl font-medium border flex items-center gap-1.5 transition ${
              isGroup
                ? 'bg-purple-950 text-purple-300 border-purple-700'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            {isGroup ? <Users className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
            <span>{isGroup ? 'Mode: Grup WA' : 'Mode: Private Chat'}</span>
          </button>

          {/* Role Toggle */}
          <button
            onClick={() => {
              if (isOwner) {
                setIsOwner(false);
                setIsAdmin(true);
              } else if (isAdmin) {
                setIsAdmin(false);
              } else {
                setIsOwner(true);
                setIsAdmin(true);
              }
            }}
            className="px-3 py-1.5 rounded-xl font-medium border border-slate-700 bg-slate-800 text-slate-200 flex items-center gap-1.5 transition"
          >
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>Role: {isOwner ? '👑 Owner' : isAdmin ? '⭐ Admin' : '👤 Member'}</span>
          </button>

          {/* Clear */}
          <button
            onClick={clearChat}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 border border-slate-700 transition"
            aria-label="Bersihkan obrolan"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* WhatsApp Simulated Phone Canvas */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col h-[560px] shadow-2xl">
        {/* WhatsApp App Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow">
                48
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                {isGroup ? '48Group Fans Club (Grup WA)' : 'Freya-san Bot by Pak Ujan'}
              </h3>
              <span className="text-[11px] text-emerald-400 font-medium">online</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 hidden sm:block">
            {isGroup ? '👥 48 Anggota' : 'Akun Resmi WhatsApp Bot'}
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0b141a]/95">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                {!isUser && isGroup && (
                  <span className="text-[10px] text-purple-400 ml-1 mb-0.5 font-medium">
                    {msg.senderName}
                  </span>
                )}
                {isUser && isGroup && (
                  <span className="text-[10px] text-slate-400 mr-1 mb-0.5 font-medium">
                    {msg.senderName}
                  </span>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[70%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-sm ${
                    isUser
                      ? 'bg-purple-600 text-white rounded-tr-none'
                      : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                  <div
                    className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                      isUser ? 'text-purple-200' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {isUser && <CheckCheck className="w-3.5 h-3.5 text-sky-300" />}
                  </div>
                </div>
              </div>
            );
          })}
          {isSending && (
            <div className="flex items-center gap-2 text-xs text-slate-400 italic">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" />
              <span>Freya-san sedang mengetik...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-slate-900/90 border-t border-slate-800/80 overflow-x-auto flex items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 shrink-0">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Cepat:
          </span>
          {sampleCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleSend(cmd)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-purple-300 text-xs font-mono font-medium shrink-0 border border-slate-700/60 transition"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={`Ketik pesan atau command (contoh: ${prefix}menu)...`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputText.trim() || isSending}
            aria-label="Kirim Pesan"
            className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white transition shadow-lg shadow-purple-600/30"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
