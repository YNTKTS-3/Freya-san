/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export class CooldownManager {
  // Key format: `${userId}:${commandName}` -> timestamp of expiry
  private cooldowns: Map<string, number> = new Map();

  /**
   * Check if a command is on cooldown for a user.
   * If on cooldown, returns remaining seconds.
   * If not on cooldown and applyIfAllowed is true, sets the cooldown.
   */
  public check(
    userId: string,
    commandName: string,
    cooldownSeconds: number,
    isOwner: boolean = false,
    applyIfAllowed: boolean = true
  ): { onCooldown: boolean; remainingSeconds: number } {
    // Owners bypass cooldowns
    if (isOwner || cooldownSeconds <= 0) {
      return { onCooldown: false, remainingSeconds: 0 };
    }

    const key = `${userId}:${commandName}`;
    const now = Date.now();
    const expiry = this.cooldowns.get(key);

    if (expiry && now < expiry) {
      const remainingSeconds = Math.ceil((expiry - now) / 1000);
      return { onCooldown: true, remainingSeconds };
    }

    if (applyIfAllowed) {
      this.cooldowns.set(key, now + cooldownSeconds * 1000);
    }

    return { onCooldown: false, remainingSeconds: 0 };
  }

  public reset(userId: string, commandName: string): void {
    this.cooldowns.delete(`${userId}:${commandName}`);
  }

  public clearAll(): void {
    this.cooldowns.clear();
  }
}

export const cooldownManager = new CooldownManager();
