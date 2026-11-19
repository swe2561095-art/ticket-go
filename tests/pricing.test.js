const test = require('node:test');
const assert = require('node:assert');
const { calcTotal } = require('../src/pricing');

test('хөнгөлөлтгүй нийт дүн', () => {
  assert.strictEqual(calcTotal([700000, 700000]), 1400000);
});

test('10% хөнгөлөлттэй нийт дүн', () => {
  assert.strictEqual(calcTotal([700000, 700000], 10), 1260000);
});
