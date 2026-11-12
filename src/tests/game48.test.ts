/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { game48Engine } from '../services/game48/engine.ts';

test('Game48: start and answer tebakmember session', () => {
  const chatId = 'chat-game-test-1';
  const start = game48Engine.startTebakMember(chatId);
  assert.equal(start.success, true);
  assert.ok(game48Engine.isGameActive(chatId));

  const active = game48Engine.getActiveGame(chatId);
  assert.ok(active);

  // Correct answer
  const check = game48Engine.checkAnswer(chatId, '628999', 'Wota Tester', active!.answer);
  assert.equal(check.isMatch, true);
  assert.match(check.replyText!, /JAWABAN BENAR/i);
  assert.equal(game48Engine.isGameActive(chatId), false);
});

test('Game48: gacha card draw costs points and gives card', () => {
  const userId = '628777';
  const player = game48Engine.getOrCreatePlayer(userId, 'Wota Gacha');
  player.points = 100;

  const result = game48Engine.drawGacha(userId, 'Wota Gacha');
  assert.equal(result.success, true);
  assert.equal(player.points, 75);
  assert.ok(result.card);
});

test('Game48: daily mission streak increases points', () => {
  const userId = '628555';
  const claim1 = game48Engine.claimDaily(userId, 'Daily Wota');
  assert.match(claim1, /MISI HARIAN/i);

  // Immediate second claim should be rejected on same day
  const claim2 = game48Engine.claimDaily(userId, 'Daily Wota');
  assert.match(claim2, /sudah mengklaim/i);
});

test('Game48: surrender game returns answer', () => {
  const chatId = 'chat-game-surrender';
  game48Engine.startTebakJiko(chatId);
  assert.ok(game48Engine.isGameActive(chatId));

  const surr = game48Engine.surrender(chatId);
  assert.match(surr, /MENYERAH/i);
  assert.equal(game48Engine.isGameActive(chatId), false);
});
