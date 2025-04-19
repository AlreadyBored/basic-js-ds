const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { Stack } = require('../src/stack');

describe('Stack', () => {
  // Presence requirement
  describe('variable presence', () => {
    test('class Stack exists', () => {
      assert.ok(Stack);
      assert.strictEqual(typeof Stack, 'function');
    });

    test('correct inheritance', () => {
      const stack = new Stack();
      assert.ok(stack instanceof Stack);
    });

    test('has methods', () => {
      const instance = new Stack();
      assert.strictEqual(typeof instance.push, 'function');
      assert.strictEqual(typeof instance.pop, 'function');
      assert.strictEqual(typeof instance.peek, 'function');
    });
  });

  // Functional requirements
  describe('functional requirements', () => {
    test('push, peek and pop work correctly', () => {
      const stack = new Stack();
      stack.push(5);
      stack.push(6);
      stack.push(7);
      assert.strictEqual(stack.peek(), 7);
      assert.strictEqual(stack.pop(), 7);
      assert.strictEqual(stack.peek(), 6);
    });

    test('pop returns undefined for empty stack', () => {
      const stack = new Stack();
      assert.strictEqual(stack.pop(), undefined);
    });

    test('peek returns undefined for empty stack', () => {
      const stack = new Stack();
      assert.strictEqual(stack.peek(), undefined);
    });

    test('stack works correctly with multiple operations', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      assert.strictEqual(stack.pop(), 2);
      stack.push(3);
      assert.strictEqual(stack.peek(), 3);
      assert.strictEqual(stack.pop(), 3);
      assert.strictEqual(stack.pop(), 1);
      assert.strictEqual(stack.pop(), undefined);
    });
  });
});
