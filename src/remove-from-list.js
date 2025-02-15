const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Create a new dummy node at the start to simplify edge cases
  const dummyNode = new ListNode(0);
  dummyNode.next = l;
  let currentNode = dummyNode;

  // Traverse the list, starting from the dummy node
  while (currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next; // Skip the node with value k
    } else {
      currentNode = currentNode.next; // Move to the next node
    }
  }

  // Return the new head of the list (which is after the dummy node)
  return dummyNode.next;
}

module.exports = {
  removeKFromList
};
