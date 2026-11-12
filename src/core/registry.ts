/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BotPlugin, CommandCategory } from './types.ts';
import { logger } from './logger.ts';

export class PluginRegistry {
  private plugins: Map<string, BotPlugin> = new Map();
  private aliasMap: Map<string, string> = new Map();

  /**
   * Register a new plugin into the bot engine.
   */
  public register(plugin: BotPlugin): boolean {
    const primaryName = plugin.name.toLowerCase();

    if (this.plugins.has(primaryName)) {
      logger.warn('Registry', `Plugin with name "${primaryName}" already registered, replacing.`);
    }

    this.plugins.set(primaryName, plugin);

    // Register aliases
    if (plugin.aliases && Array.isArray(plugin.aliases)) {
      for (const alias of plugin.aliases) {
        const cleanAlias = alias.toLowerCase();
        this.aliasMap.set(cleanAlias, primaryName);
      }
    }

    return true;
  }

  /**
   * Find plugin by name or alias.
   */
  public find(nameOrAlias: string): BotPlugin | undefined {
    const clean = nameOrAlias.toLowerCase();
    if (this.plugins.has(clean)) {
      return this.plugins.get(clean);
    }
    const realName = this.aliasMap.get(clean);
    if (realName && this.plugins.has(realName)) {
      return this.plugins.get(realName);
    }
    return undefined;
  }

  /**
   * Get all registered plugins.
   */
  public getAll(): BotPlugin[] {
    return Array.from(this.plugins.values());
  }

  /**
   * Get plugins grouped by category.
   */
  public getByCategory(): Record<CommandCategory, BotPlugin[]> {
    const result: Partial<Record<CommandCategory, BotPlugin[]>> = {};

    for (const plugin of this.plugins.values()) {
      if (!result[plugin.category]) {
        result[plugin.category] = [];
      }
      result[plugin.category]!.push(plugin);
    }

    return result as Record<CommandCategory, BotPlugin[]>;
  }

  /**
   * Toggle plugin enabled/disabled status.
   */
  public toggle(name: string, enabled?: boolean): boolean {
    const plugin = this.find(name);
    if (!plugin) return false;

    plugin.enabled = enabled !== undefined ? enabled : !plugin.enabled;
    logger.info('Registry', `Plugin "${plugin.name}" status changed to: ${plugin.enabled ? 'ENABLED' : 'DISABLED'}`);
    return true;
  }

  /**
   * Total count of registered plugins
   */
  public get totalCount(): number {
    return this.plugins.size;
  }

  /**
   * Total count of enabled plugins
   */
  public get enabledCount(): number {
    let count = 0;
    for (const p of this.plugins.values()) {
      if (p.enabled) count++;
    }
    return count;
  }
}

export const pluginRegistry = new PluginRegistry();
