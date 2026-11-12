/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { PermissionManager } from '../core/permission.ts';
import { CommandContext } from '../core/types.ts';

const createMockCtx = (overrides: Partial<CommandContext['sender']> = {}, isGroup = false): CommandContext => ({
  messageId: 'msg-123',
  sender: {
    id: '6289999999',
    pushName: 'User Test',
    isOwner: false,
    isAdmin: false,
    ...overrides,
  },
  chatId: isGroup ? '12345@g.us' : '6289999999@s.whatsapp.net',
  isGroup,
  groupMetadata: isGroup ? { subject: 'Test Group', participantsCount: 10, botIsAdmin: true } : undefined,
  command: 'test',
  args: [],
  argText: '',
  prefix: '/',
  timestamp: Date.now(),
  reply: async () => '',
});

test('PermissionManager: allows anyone when permission includes all', () => {
  const ctx = createMockCtx();
  const res = PermissionManager.check(ctx, ['all']);
  assert.equal(res.allowed, true);
});

test('PermissionManager: blocks regular user from owner command', () => {
  const ctx = createMockCtx({ isOwner: false });
  const res = PermissionManager.check(ctx, ['owner']);
  assert.equal(res.allowed, false);
});

test('PermissionManager: allows owner on owner command', () => {
  const ctx = createMockCtx({ isOwner: true });
  const res = PermissionManager.check(ctx, ['owner']);
  assert.equal(res.allowed, true);
});

test('PermissionManager: blocks group_admin command in private chat', () => {
  const ctx = createMockCtx({ isAdmin: true }, false);
  const res = PermissionManager.check(ctx, ['group_admin']);
  assert.equal(res.allowed, false);
});

test('PermissionManager: allows group admin in group chat', () => {
  const ctx = createMockCtx({ isAdmin: true }, true);
  const res = PermissionManager.check(ctx, ['group_admin']);
  assert.equal(res.allowed, true);
});
