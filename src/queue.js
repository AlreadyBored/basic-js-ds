// const { NotImplementedError, ListNode } = require('../extensions/index.js');
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
class Queue {
  constructor() {
    let nodeHead = null;
    let nodeTail = null;
  }

  enqueue(value) {
    let temp = new ListNode(value);

    if (!this.nodeHead && !this.nodeTail) {
      this.nodeHead = temp;
      this.nodeTail = temp;
      return;
    }

    this.nodeTail.next = temp;
    this.nodeTail = temp;
    return this.nodeTail;
  }

  dequeue() {
    let temp = this.nodeHead;
    if (!this.nodeHead) {
      return;
    }

    if (this.nodeHead == this.nodeTail) {
      this.nodeHead = null;
      this.nodeTail = null;
    } else {
      this.nodeHead = this.nodeHead.next;
    }
    return temp.value;
  }

  getUnderlyingList() {
    return this.nodeHead;
  }
}

module.exports = {
  Queue
};
