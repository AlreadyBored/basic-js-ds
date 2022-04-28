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
  constructor() {
    this.queue = [];
    this._underLyingList = {}
  }
  underLyingList(data) {
    if (data === this.queue.length) {
        return null
    }
    return {
        value: this.queue[data],
        next: this.underLyingList(data + 1)
    }
  }
  enqueue(value) {
      this.queue.push(value)
  }
  dequeue() {
      return this.queue.shift()
  }
  getUnderlyingList() {
    if (this.queue.length) {
        this._underLyingList = {
            value: this.queue[0],
            next: this.underLyingList(1)
        }
        return this._underLyingList
    } else {
        return {}
    }
  }
}

module.exports = {
  Queue
};
