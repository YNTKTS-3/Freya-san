/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { MessageParser } from '../core/parser.ts';

test('MessageParser: should identify command with default slash prefix', () => {
  const result = MessageParser.parse('/ping', '/');
  assert.equal(result.isCommand, true);
  assert.equal(result.prefix, '/');
  assert.equal(result.commandName, 'ping');
  assert.equal(result.args.length, 0);
});

test('MessageParser: should parse command with multiple arguments and whitespace', () => {
  const result = MessageParser.parse('!translate   en   Selamat Pagi Dunia', '!');
  assert.equal(result.isCommand, true);
  assert.equal(result.prefix, '!');
  assert.equal(result.commandName, 'translate');
  assert.equal(result.args.length, 4);
  assert.equal(result.args[0], 'en');
  assert.equal(result.argText, 'en   Selamat Pagi Dunia');
});

test('MessageParser: should support alternative standard prefixes like dot and hash', () => {
  const resultDot = MessageParser.parse('.menu', '/');
  assert.equal(resultDot.isCommand, true);
  assert.equal(resultDot.commandName, 'menu');

  const resultHash = MessageParser.parse('#infobot', '/');
  assert.equal(resultHash.isCommand, true);
  assert.equal(resultHash.commandName, 'infobot');
});

test('MessageParser: should reject non-command regular text', () => {
  const result = MessageParser.parse('Halo pagi apa kabar semuanya', '/');
  assert.equal(result.isCommand, false);
  assert.equal(result.commandName, '');
});

test('MessageParser.parseQuotedArgs: should correctly handle quotes', () => {
  const args = MessageParser.parseQuotedArgs('brat "Freya Jayawardana" 48Group');
  assert.equal(args.length, 3);
  assert.equal(args[0], 'brat');
  assert.equal(args[1], 'Freya Jayawardana');
  assert.equal(args[2], '48Group');
});
