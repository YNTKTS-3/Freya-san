/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PermissionLevel, CommandContext } from './types.ts';

export class PermissionManager {
  /**
   * Check if a context satisfies the required permissions of a command.
   */
  public static check(
    ctx: CommandContext,
    requiredPermissions: PermissionLevel[]
  ): { allowed: boolean; reason?: string } {
    // If command requires 'all', everyone can execute
    if (requiredPermissions.includes('all')) {
      return { allowed: true };
    }

    // Owner always has supreme permission
    if (ctx.sender.isOwner) {
      return { allowed: true };
    }

    // Check 'owner'
    if (requiredPermissions.includes('owner')) {
      if (!ctx.sender.isOwner) {
        return {
          allowed: false,
          reason: '⚠️ Fitur ini khusus untuk Owner (Pak Ujan). Akses ditolak!',
        };
      }
    }

    // Check 'group_admin'
    if (requiredPermissions.includes('group_admin')) {
      if (!ctx.isGroup) {
        return {
          allowed: false,
          reason: '⚠️ Perintah ini hanya dapat dijalankan di dalam grup WhatsApp!',
        };
      }
      if (!ctx.sender.isAdmin && !ctx.sender.isOwner) {
        return {
          allowed: false,
          reason: '⚠️ Perintah ini memerlukan hak Admin Grup!',
        };
      }
      // If action requires bot to be admin (e.g. kick, promote, hidetag)
      if (ctx.groupMetadata && !ctx.groupMetadata.botIsAdmin) {
        return {
          allowed: false,
          reason: '⚠️ Freya-san Bot harus dijadikan Admin Grup terlebih dahulu untuk menjalankan aksi ini!',
        };
      }
    }

    // Check 'bot_admin'
    if (requiredPermissions.includes('bot_admin')) {
      if (!ctx.sender.isOwner) {
        return {
          allowed: false,
          reason: '⚠️ Perintah ini memerlukan status Administrator Bot!',
        };
      }
    }

    return { allowed: true };
  }
}
