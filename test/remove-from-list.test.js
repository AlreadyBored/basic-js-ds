const { describe } = require('node:test');
const assert = require('node:assert');
const { test } = require('../lib');
const { removeKFromList } = require('../src/remove-from-list');

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = { value: cur, next: acc };
      return node;
    }
    return { value: cur, next: null };
  }, null);
}

describe('Remove from list', () => {
  // Presence requirement
  describe('variable presence', () => {
    test('function removeKFromList exists', () => {
      assert.ok(removeKFromList);
      assert.strictEqual(typeof removeKFromList, 'function');
    });
  });

  // Functional requirements
  describe('functional requirements', () => {
    test('should return the list without values equal to k', () => {
      const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
      const expected = convertArrayToList([1, 2, 4, 5]);
      assert.deepStrictEqual(removeKFromList(initial, 3), expected);
    });

    test('should return the list without values equal to k (with double k)', () => {
      const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
      const expected = convertArrayToList([1, 2, 4, 5]);
      assert.deepStrictEqual(removeKFromList(initial, 3), expected);
    });

    test('should return the list without values equal to k (with k at the end)', () => {
      const initial = convertArrayToList([1, 2, 3]);
      const expected = convertArrayToList([1, 2]);
      assert.deepStrictEqual(removeKFromList(initial, 3), expected);
    });
  });
});
