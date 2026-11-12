/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { botEngine } from '../core/engine.ts';
import { pluginRegistry } from '../core/registry.ts';

test('BotEngine: executes /ping and returns pong with latency', async () => {
  const result = await botEngine.handleMessage({
    senderId: '6281111111',
    senderName: 'Ujan Tester',
    chatId: '6281111111@s.whatsapp.net',
    isGroup: false,
    text: '/ping',
  });

  assert.equal(result.handled, true);
  assert.equal(result.replies.length, 1);
  assert.match(result.replies[0], /Pong/i);
});

test('BotEngine: executes /menu and lists categories', async () => {
  const result = await botEngine.handleMessage({
    senderId: '6281111111',
    senderName: 'Ujan Tester',
    chatId: '6281111111@s.whatsapp.net',
    isGroup: false,
    text: '/menu',
  });

  assert.equal(result.handled, true);
  assert.match(result.replies[0], /Freya-san/i);
  assert.match(result.replies[0], /GENERAL/i);
});

test('BotEngine: responds to disabled plugin with warning', async () => {
  // temporarily disable version
  pluginRegistry.toggle('version', false);

  const result = await botEngine.handleMessage({
    senderId: '6281111111',
    senderName: 'Ujan Tester',
    chatId: '6281111111@s.whatsapp.net',
    isGroup: false,
    text: '/version',
  });

  assert.equal(result.handled, true);
  assert.match(result.replies[0], /dinonaktifkan/i);

  // re-enable
  pluginRegistry.toggle('version', true);
});

test('BotEngine: handles anti-link in group chats', async () => {
  const result = await botEngine.handleMessage({
    senderId: '6289999999',
    senderName: 'Spammer',
    chatId: '120363012345678@g.us',
    isGroup: true,
    isAdmin: false,
    text: 'Gabung grup kuy https://chat.whatsapp.com/Abcdef1234567890123456',
  });

  assert.equal(result.handled, true);
  assert.match(result.replies[0], /ANTI-LINK DETECTED/i);
});
