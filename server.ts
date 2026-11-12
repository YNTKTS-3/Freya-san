/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import { botEngine } from './src/core/engine.ts';
import { store } from './src/storage/store.ts';
import { pluginRegistry } from './src/core/registry.ts';
import { whatsappConnection } from './src/adapters/whatsapp/connection.ts';
import { logger } from './src/core/logger.ts';
import { fullReferenceCatalog } from './src/plugins/catalogData.ts';
import os from 'os';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // === REST API ENDPOINTS ===

  // 1. Overview & Bot Status
  app.get('/api/status', (req, res) => {
    res.json({
      name: store.config.name,
      uptimeSeconds: store.getUptimeSeconds(),
      uptimeFormatted: store.getFormattedUptime(),
      totalPlugins: pluginRegistry.totalCount,
      enabledPlugins: pluginRegistry.enabledCount,
      whatsappStatus: store.sessionInfo.status,
      connectedPhone: store.sessionInfo.connectedPhone,
      prefix: store.config.prefix,
      owner: store.config.ownerName,
    });
  });

  // 2. WhatsApp Connection API
  app.get('/api/whatsapp/session', (req, res) => {
    res.json(store.sessionInfo);
  });

  app.post('/api/whatsapp/pair-qr', async (req, res) => {
    try {
      const qrDataUrl = await whatsappConnection.requestQrPairing();
      res.json({ success: true, qrCodeDataUrl: qrDataUrl });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      res.status(500).json({ success: false, error: msg });
    }
  });

  app.post('/api/whatsapp/pair-code', async (req, res) => {
    try {
      const { phoneNumber } = req.body;
      const code = await whatsappConnection.requestPairingCode(phoneNumber || store.config.ownerNumber);
      res.json({ success: true, pairingCode: code });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      res.status(400).json({ success: false, error: msg });
    }
  });

  app.post('/api/whatsapp/connect-simulated', async (req, res) => {
    const { phoneNumber, pushName } = req.body;
    await whatsappConnection.completeConnection(phoneNumber, pushName);
    res.json({ success: true, session: store.sessionInfo });
  });

  app.post('/api/whatsapp/disconnect', async (req, res) => {
    const { reason } = req.body;
    await whatsappConnection.disconnect(reason || 'Admin disconnected via dashboard');
    res.json({ success: true, session: store.sessionInfo });
  });

  app.post('/api/whatsapp/reconnect', async (req, res) => {
    await whatsappConnection.reconnect();
    res.json({ success: true, session: store.sessionInfo });
  });

  // 3. Message Processing / Interactive Simulator API
  app.post('/api/bot/message', async (req, res) => {
    try {
      const {
        text,
        senderId = store.config.ownerNumber,
        senderName = 'Admin Tester',
        isGroup = false,
        chatId = 'tester-chat-1',
        isAdmin = true,
        isOwner = true,
        groupSubject = '48Group Fans Club',
      } = req.body;

      const result = await botEngine.handleMessage({
        text,
        senderId,
        senderName,
        chatId: isGroup ? '120363012345678@g.us' : chatId,
        isGroup,
        isAdmin,
        isOwner,
        groupSubject,
      });

      res.json({ success: true, ...result });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      res.status(500).json({ success: false, error: msg });
    }
  });

  // 4. Plugin Management API
  app.get('/api/plugins', (req, res) => {
    const plugins = pluginRegistry.getAll().map((p) => ({
      name: p.name,
      category: p.category,
      description: p.description,
      aliases: p.aliases,
      usage: p.usage,
      permissions: p.permissions,
      enabled: p.enabled,
      cooldown: p.cooldown,
      dependencies: p.dependencies,
      apiRequirements: p.apiRequirements,
    }));
    res.json({ plugins, total: plugins.length, enabled: pluginRegistry.enabledCount });
  });

  app.post('/api/plugins/:name/toggle', (req, res) => {
    const { name } = req.params;
    const { enabled } = req.body;
    const success = pluginRegistry.toggle(name, enabled);
    res.json({ success, plugin: pluginRegistry.find(name) });
  });

  // 5. Command Catalog Reference API
  app.get('/api/catalog', (req, res) => {
    res.json({
      catalog: fullReferenceCatalog,
      totalCount: fullReferenceCatalog.length,
    });
  });

  // 6. Settings API
  app.get('/api/settings', (req, res) => {
    res.json({
      config: store.config,
      groups: store.getAllGroups(),
    });
  });

  app.put('/api/settings', (req, res) => {
    const updated = store.updateConfig(req.body);
    logger.info('Settings', 'Bot configuration updated via dashboard');
    res.json({ success: true, config: updated });
  });

  app.put('/api/groups/:id', (req, res) => {
    const { id } = req.params;
    const updated = store.updateGroup(id, req.body);
    logger.info('Settings', `Group ${id} configuration updated via dashboard`);
    res.json({ success: true, group: updated });
  });

  // 7. Logs API
  app.get('/api/logs', (req, res) => {
    res.json({ logs: logger.getLogs() });
  });

  app.post('/api/logs/clear', (req, res) => {
    logger.clear();
    res.json({ success: true });
  });

  // 8. Backup & Restore API
  app.get('/api/backup/download', (req, res) => {
    const json = store.createBackupJSON();
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="ujanbot-backup-${Date.now()}.json"`);
    res.send(json);
  });

  app.post('/api/backup/restore', (req, res) => {
    const { backupData } = req.body;
    const jsonStr = typeof backupData === 'string' ? backupData : JSON.stringify(backupData);
    const success = store.restoreBackupJSON(jsonStr);
    if (success) {
      logger.info('Backup', 'Database and configuration restored from snapshot');
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Format file backup tidak valid' });
    }
  });

  // 9. System Monitor API
  app.get('/api/system', (req, res) => {
    const memory = process.memoryUsage();
    res.json({
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      processUptime: Math.floor(process.uptime()),
      systemUptime: Math.floor(os.uptime()),
      totalMemoryMb: Math.round(os.totalmem() / 1024 / 1024),
      freeMemoryMb: Math.round(os.freemem() / 1024 / 1024),
      heapUsedMb: Math.round(memory.heapUsed / 1024 / 1024),
      heapTotalMb: Math.round(memory.heapTotal / 1024 / 1024),
      rssMb: Math.round(memory.rss / 1024 / 1024),
      cpuCount: os.cpus().length,
      loadAvg: os.loadavg(),
    });
  });

  // Attach Vite middleware in development
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌸 48Group Bot (Freya-san) Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
});
