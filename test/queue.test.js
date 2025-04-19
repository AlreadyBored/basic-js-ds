const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { Queue } = require('../src/queue');

describe('Queue', () => {
  // Presence requirement
  describe('variable presence', () => {
    test('class Queue exists', () => {
      assert.ok(Queue);
      assert.strictEqual(typeof Queue, 'function');
    });

    test('correct inheritance', () => {
      const queue = new Queue();
      assert.ok(queue instanceof Queue);
    });

    test('has methods', () => {
      const instance = new Queue();
      assert.strictEqual(typeof instance.enqueue, 'function');
      assert.strictEqual(typeof instance.dequeue, 'function');
      assert.strictEqual(typeof instance.getUnderlyingList, 'function');
    });
  });

  // Functional requirements
  describe('functional requirements', () => {
    test('enqueue and dequeue work correctly', () => {
      const queue = new Queue();
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      assert.strictEqual(queue.dequeue(), 5);
      assert.strictEqual(queue.dequeue(), 6);
    });

    test('getUnderlyingList returns correct structure for empty queue', () => {
      const queue = new Queue();
      assert.strictEqual(queue.getUnderlyingList(), null);
    });

    test('getUnderlyingList returns correct structure after enqueue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      const expected = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: null
          }
        }
      };
      assert.deepStrictEqual(queue.getUnderlyingList(), expected);
    });

    test('getUnderlyingList returns correct structure after dequeue', () => {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      const expected = {
        value: 2,
        next: {
          value: 3,
          next: null
        }
      };
      assert.deepStrictEqual(queue.getUnderlyingList(), expected);
    });

    test('dequeue returns undefined for empty queue', () => {
      const queue = new Queue();
      assert.strictEqual(queue.dequeue(), undefined);
    });
  });
});
