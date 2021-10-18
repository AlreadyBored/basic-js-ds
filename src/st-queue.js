const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.queueArray = [];
  }

  getUnderlyingList() {
    function convertNode(arr) {
      return arr.reverse().reduce((a, b) => {
        if (a) {
          const node = new ListNode(b);
          node.next = a;
          return node;
        }
        return new ListNode(b);
      }, null);
    } return convertNode(this.queueArray);
  }

  enqueue(backValue) {
    this.queueArray.push(backValue);
  }

  dequeue() {
    return this.queueArray.shift();
  }
}
