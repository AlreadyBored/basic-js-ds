const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  quene = null;

  getUnderlyingList() {
    return this.quene;
  }

  enqueue(value) {
    let el = new ListNode(value);
    if (!this.quene) {
      this.quene = el;
    } else {
      let x = this.queue;
      while (x) {
        if (!x.next) {
          x.next = el;
          break;
        }
        x = x.next;
      }
    }
  }

  dequeue() {
    let res = this.quene.value;
    this.quene = this.quene.next;
    return res;
  }
}

module.exports = {
  Queue,
};
