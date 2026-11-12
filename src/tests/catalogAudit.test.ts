/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { fullReferenceCatalog } from '../plugins/catalogData.ts';
import { pluginRegistry } from '../core/registry.ts';
import '../plugins/index.ts';

test('Catalog Audit: verify total reference entries count', () => {
  assert.equal(fullReferenceCatalog.length, 583);
});

test('Catalog Audit: verify unique command names and duplicates', () => {
  const names = fullReferenceCatalog.map((c) => c.originalName);
  const uniqueNames = new Set(names);
  // Total entries: 583, unique: 560, duplicates: 23 in textmaker
  assert.equal(uniqueNames.size, 560);

  const dupes = fullReferenceCatalog.filter((c) => c.isDuplicate);
  assert.equal(dupes.length, 46); // 23 pairs = 46 items marked as duplicate
});

test('Catalog Audit: verify status counts', () => {
  const counts = {
    IMPLEMENTED: 0,
    BLOCKED: 0,
    NEEDS_API: 0,
    NEEDS_SPECIFICATION: 0,
    PLANNED: 0,
  };

  for (const item of fullReferenceCatalog) {
    if (counts[item.status as keyof typeof counts] !== undefined) {
      counts[item.status as keyof typeof counts]++;
    }
  }

  // 41 implemented (30 initial + 11 48Group game plugins)
  assert.equal(counts.IMPLEMENTED, 41);
  assert.ok(counts.BLOCKED >= 12);
  assert.ok(counts.NEEDS_API >= 30);
});

test('Catalog Audit: verify all implemented plugins exist in registry', () => {
  const implemented = fullReferenceCatalog.filter((c) => c.status === 'IMPLEMENTED');
  for (const item of implemented) {
    const found = pluginRegistry.find(item.name);
    assert.ok(found, `Plugin ${item.name} must be registered in pluginRegistry`);
  }
});
