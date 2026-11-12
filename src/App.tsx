/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Sidebar, TabKey } from './components/Sidebar.tsx';
import { OverviewTab } from './components/OverviewTab.tsx';
import { WhatsAppTab } from './components/WhatsAppTab.tsx';
import { SimulatorTab } from './components/SimulatorTab.tsx';
import { PluginManagerTab } from './components/PluginManagerTab.tsx';
import { CommandCatalogTab } from './components/CommandCatalogTab.tsx';
import { SettingsTab } from './components/SettingsTab.tsx';
import { GroupManagerTab } from './components/GroupManagerTab.tsx';
import { LogsTab } from './components/LogsTab.tsx';
import { BackupTab } from './components/BackupTab.tsx';
import { SystemTab } from './components/SystemTab.tsx';
import { GuideTab } from './components/GuideTab.tsx';

import { api } from './services/api.ts';
import {
  BotConfig,
  GroupConfig,
  LogMessage,
  WhatsAppSessionInfo,
  CatalogItem,
  BotPlugin,
} from './core/types.ts';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Application Data States
  const [status, setStatus] = useState<any>({
    name: 'Freya-san bot by Pak Ujan',
    uptimeFormatted: '0 Detik',
    totalPlugins: 30,
    enabledPlugins: 30,
    whatsappStatus: 'DISCONNECTED',
    connectedPhone: null,
    prefix: '/',
    owner: 'Pak Ujan',
  });

  const [session, setSession] = useState<WhatsAppSessionInfo>({
    status: 'DISCONNECTED',
    connectedPhone: null,
    pushName: null,
    qrCodeDataUrl: null,
    pairingCode: null,
    lastConnectedAt: null,
    reconnectAttempts: 0,
    batteryLevel: 94,
  });

  const [config, setConfig] = useState<BotConfig>({
    name: 'Freya-san bot by Pak Ujan',
    prefix: '/',
    ownerNumber: '6281234567890',
    ownerName: 'Pak Ujan',
    defaultCooldown: 3,
    aiModel: 'gemini-2.5-flash',
    welcomeEnabled: true,
    welcomeMessage: 'Halo selamat datang di grup! Perkenalkan dirimu dan patuhi peraturan grup ya ✨',
    antilinkEnabled: true,
    autoRead: false,
    selfMode: false,
  });

  const [groups, setGroups] = useState<GroupConfig[]>([]);
  const [plugins, setPlugins] = useState<BotPlugin[]>([]);
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [logs, setLogs] = useState<LogMessage[]>([]);

  // Load initial data
  const fetchData = async () => {
    try {
      const [
        statusData,
        sessionData,
        settingsData,
        pluginsData,
        catalogData,
        logsData,
      ] = await Promise.all([
        api.getStatus(),
        api.getWhatsAppSession(),
        api.getSettings(),
        api.getPlugins(),
        api.getCatalog(),
        api.getLogs(),
      ]);

      if (statusData) setStatus(statusData);
      if (sessionData) setSession(sessionData);
      if (settingsData) {
        setConfig(settingsData.config);
        setGroups(settingsData.groups);
      }
      if (pluginsData) setPlugins(pluginsData.plugins);
      if (catalogData) setCatalog(catalogData.catalog);
      if (logsData) setLogs(logsData.logs);
    } catch (e) {
      console.error('Error fetching dashboard data:', e);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 4000);
    return () => clearInterval(interval);
  }, []);

  // WhatsApp Actions
  const handleRequestQr = async () => {
    const res = await api.requestQrPairing();
    if (res.success && res.qrCodeDataUrl) {
      setSession((prev) => ({
        ...prev,
        status: 'PAIRING_QR',
        qrCodeDataUrl: res.qrCodeDataUrl,
      }));
    }
  };

  const handleRequestCode = async (phone: string) => {
    const res = await api.requestPairingCode(phone);
    if (res.success && res.pairingCode) {
      setSession((prev) => ({
        ...prev,
        status: 'PAIRING_CODE',
        pairingCode: res.pairingCode,
      }));
      return res.pairingCode;
    }
    throw new Error('Failed to generate pairing code');
  };

  const handleConnectSimulated = async (phone?: string, pushName?: string) => {
    const res = await api.simulateConnect(phone, pushName);
    if (res.success && res.session) {
      setSession(res.session);
      setStatus((prev: any) => ({
        ...prev,
        whatsappStatus: 'CONNECTED',
        connectedPhone: res.session.connectedPhone,
      }));
    }
  };

  const handleDisconnect = async () => {
    const res = await api.disconnect();
    if (res.success && res.session) {
      setSession(res.session);
      setStatus((prev: any) => ({
        ...prev,
        whatsappStatus: 'DISCONNECTED',
        connectedPhone: null,
      }));
    }
  };

  const handleReconnect = async () => {
    const res = await api.reconnect();
    if (res.success && res.session) {
      setSession(res.session);
    }
  };

  // Simulator Handler
  const handleSendMessage = async (payload: {
    text: string;
    isGroup: boolean;
    isAdmin: boolean;
    isOwner: boolean;
    senderName: string;
  }) => {
    const result = await api.executeMessage(payload);
    // Refresh logs & stats
    fetchData();
    return result;
  };

  // Plugin Toggle Handler
  const handleTogglePlugin = async (name: string, enabled: boolean) => {
    await api.togglePlugin(name, enabled);
    setPlugins((prev) =>
      prev.map((p) => (p.name === name ? { ...p, enabled } : p))
    );
    fetchData();
  };

  // Settings Save Handler
  const handleSaveConfig = async (updated: Partial<BotConfig>) => {
    const res = await api.updateSettings(updated);
    if (res.success && res.config) {
      setConfig(res.config);
      setStatus((prev: any) => ({
        ...prev,
        prefix: res.config.prefix,
        name: res.config.name,
      }));
    }
  };

  // Group Update Handler
  const handleUpdateGroup = async (id: string, update: Partial<GroupConfig>) => {
    const res = await api.updateGroup(id, update);
    if (res.success && res.group) {
      setGroups((prev) =>
        prev.map((g) => (g.id === id ? { ...g, ...update } : g))
      );
    }
  };

  // Logs Clear
  const handleClearLogs = async () => {
    await api.clearLogs();
    setLogs([]);
  };

  // Backup Handlers
  const handleDownloadBackup = async () => {
    return await api.getBackupData();
  };

  const handleRestoreBackup = async (jsonStr: string) => {
    const res = await api.restoreBackup(jsonStr);
    if (res.success) {
      fetchData();
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onToggleSidebar={() => setSidebarOpen(true)}
        whatsappStatus={session.status}
        connectedPhone={session.connectedPhone}
        botName={config.name}
      />

      <div className="flex-1 flex overflow-hidden">
        {/* Responsive Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          enabledPluginsCount={plugins.filter((p) => p.enabled).length}
        />

        {/* Main Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {activeTab === 'overview' && (
            <OverviewTab
              status={status}
              recentLogs={logs}
              config={config}
              onNavigate={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'whatsapp' && (
            <WhatsAppTab
              session={session}
              onRequestQr={handleRequestQr}
              onRequestCode={handleRequestCode}
              onConnectSimulated={handleConnectSimulated}
              onDisconnect={handleDisconnect}
              onReconnect={handleReconnect}
              ownerPhone={config.ownerNumber}
            />
          )}

          {activeTab === 'simulator' && (
            <SimulatorTab
              onSendMessage={handleSendMessage}
              prefix={config.prefix}
            />
          )}

          {activeTab === 'plugins' && (
            <PluginManagerTab
              plugins={plugins}
              onTogglePlugin={handleTogglePlugin}
              prefix={config.prefix}
            />
          )}

          {activeTab === 'catalog' && (
            <CommandCatalogTab
              catalog={catalog}
              prefix={config.prefix}
              onTogglePlugin={handleTogglePlugin}
              enabledPlugins={new Set(plugins.filter((p) => p.enabled).map((p) => p.name))}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsTab config={config} onSaveConfig={handleSaveConfig} />
          )}

          {activeTab === 'groups' && (
            <GroupManagerTab groups={groups} onUpdateGroup={handleUpdateGroup} />
          )}

          {activeTab === 'logs' && (
            <LogsTab
              logs={logs}
              onClearLogs={handleClearLogs}
              onRefreshLogs={fetchData}
            />
          )}

          {activeTab === 'backup' && (
            <BackupTab
              onDownloadBackup={handleDownloadBackup}
              onRestoreBackup={handleRestoreBackup}
            />
          )}

          {activeTab === 'system' && <SystemTab />}

          {activeTab === 'guide' && <GuideTab />}
        </main>
      </div>
    </div>
  );
}
