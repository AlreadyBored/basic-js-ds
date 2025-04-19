const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { BinarySearchTree } = require('../src/binary-search-tree');

describe('Binary search tree', () => {
  //Presence requirement
  describe.only('variable presence', () => {
    test('class BinarySearchTree exists', () => {
      assert.strictEqual(typeof BinarySearchTree, 'function');
    });

    test('correct inheritance', () => {
      const tree = new BinarySearchTree();
      assert.ok(tree instanceof BinarySearchTree);
    });

    test('has methods', () => {
      const instance = new BinarySearchTree();
      assert.strictEqual(typeof instance.root, 'function');
      assert.strictEqual(typeof instance.add, 'function');
      assert.strictEqual(typeof instance.find, 'function');
      assert.strictEqual(typeof instance.has, 'function');
      assert.strictEqual(typeof instance.remove, 'function');
      assert.strictEqual(typeof instance.min, 'function');
      assert.strictEqual(typeof instance.max, 'function');
    });
  });

  //Functional requirements
  describe('functional requirements', () => {
    test('returns correct root if no value added', () => {
      const tree = new BinarySearchTree();
      assert.strictEqual(tree.root(), null);
    });

    test('root works correctly some values were added', () => {
      const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(3);
      tree.add(4);
      const root = tree.root();
      assert.ok(root);
      assert.strictEqual(root.data, 2);
    });

    test('find existing values', () => {
      const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
      const node8 = tree.find(8);
      assert.ok(node8);
      assert.strictEqual(node8.data, 8);
      const node2 = tree.find(2);
      assert.ok(node2);
      assert.strictEqual(node2.data, 2);
      const node32 = tree.find(32);
      assert.ok(node32);
      assert.strictEqual(node32.data, 32);
      const node14 = tree.find(14);
      assert.ok(node14);
      assert.strictEqual(node14.data, 14);
    });

    test('find non-existing values', () => {
      const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
      assert.strictEqual(tree.find(33), null);
      assert.strictEqual(tree.find(1337), null);
      assert.strictEqual(tree.find(42), null);
    });

    test('correctly checks presence of the values', () => {
      const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(54);
      tree.add(2);
      tree.add(6);
      tree.add(8);
      tree.add(31);
      tree.add(1);
      assert.strictEqual(tree.has(54), true);
      assert.strictEqual(tree.has(8), true);
      assert.strictEqual(tree.has(7), false);
      assert.strictEqual(tree.has(4), false);
    });

    test('remove & has works correctly', () => {
      const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(2);
      tree.add(6);
      tree.add(128);
      tree.add(8);
      tree.add(31);
      tree.add(54);
      tree.add(1);
      tree.remove(14);
      tree.remove(8);
      tree.remove(9);
      assert.strictEqual(tree.has(14), false);
      assert.strictEqual(tree.has(8), false);
      assert.strictEqual(tree.has(9), false);
      assert.strictEqual(tree.has(2), true);
      assert.strictEqual(tree.has(6), true);
      assert.strictEqual(tree.has(128), true);
      assert.strictEqual(tree.has(31), true);
      assert.strictEqual(tree.has(54), true);
      assert.strictEqual(tree.has(1), true);
    });

    test('min works correctly', () => {
      const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(54);
      tree.add(2);
      tree.add(6);
      tree.add(8);
      tree.add(31);
      tree.add(1);
      tree.remove(6);
      tree.remove(2);
      assert.strictEqual(tree.min(), 1);
    });

    test('max works correctly', () => {
      const tree = new BinarySearchTree();
      tree.add(9);
      tree.add(14);
      tree.add(54);
      tree.add(2);
      tree.add(6);
      tree.add(8);
      tree.add(31);
      tree.add(1);
      tree.remove(6);
      tree.remove(2);
      assert.strictEqual(tree.max(), 54);
    });
  });
});