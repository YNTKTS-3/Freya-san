/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { pluginRegistry } from '../core/registry.ts';
import { logger } from '../core/logger.ts';
import { generalPlugins } from './general/index.ts';
import { aiPlugins } from './ai/index.ts';
import { downloadPlugins } from './download/index.ts';
import { stickerPlugins } from './sticker/index.ts';
import { toolsPlugins } from './tools/index.ts';
import { groupPlugins } from './group/index.ts';
import { gamePlugins } from './game/index.ts';

let initialized = false;

export function registerAllPlugins() {
  if (initialized) return;

  const allGroups = [
    ...generalPlugins,
    ...aiPlugins,
    ...downloadPlugins,
    ...stickerPlugins,
    ...toolsPlugins,
    ...groupPlugins,
    ...gamePlugins,
  ];

  for (const plugin of allGroups) {
    try {
      pluginRegistry.register(plugin);
    } catch (err) {
      logger.error('PluginLoader', `Gagal memuat plugin ${plugin.name}: ${err}`);
    }
  }

  initialized = true;
  logger.info(
    'PluginLoader',
    `Berhasil memuat ${pluginRegistry.totalCount} plugin prioritas untuk Freya-san Bot.`
  );
}

// Auto register on module import
registerAllPlugins();
