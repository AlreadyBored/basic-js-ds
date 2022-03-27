const { assert } = require('chai');
const { testOptional, ListNode } = require('../extensions/index.js');
const { removeKFromList } = require('../src/remove-from-list.js');

it.optional = testOptional;

Object.freeze(assert);

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

describe('Remove from list', () => {
  it.optional('should return the list without values equal to k', () => {
    const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });

  it.optional('should return the list without values equal to k (with double k)', () => {
    const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
    const expected = convertArrayToList([1, 2, 4, 5]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });

  it.optional('should return the list without values equal to k (with k at the end)', () => {
    const initial = convertArrayToList([1, 2, 3]);
    const expected = convertArrayToList([1, 2]);
    assert.deepEqual(removeKFromList(initial, 3), expected);
  });
});
