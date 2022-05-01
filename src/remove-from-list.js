const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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


function removeKFromList(l,k) {
  class ListNode {

    constructor() {
    this.value = 0;
    this.next = null;
    }

  }

  function push( l, new_data) {
    let new_node = new ListNode();

    new_node.value = new_data;
    new_node.next = l;
    l = new_node;
    return l;
  }

  let abc = l;

  while (l.value == k) {
    l = l.next;
  }

  while (abc.next != null) {
    if (abc.next.value == k) {
      abc.next = abc.next.next;
    }
    else {
        abc = abc.next;
    }
  }
  return l;


}


module.exports = {
  removeKFromList
};
