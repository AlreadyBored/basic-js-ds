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
class Queue {
  #first = null
  #last = null

  getUnderlyingList(item) {
    if (this.#first) {
        let listQueue = []
        let pointer = this.#first
        while (pointer) {
            listQueue.push({'value' : pointer.value, 'next': pointer.next})
            pointer = pointer.next
        }
        return listQueue[0]
    }
  }

  enqueue(value) {
    if (this.#first) {
        this.#last.next = new ListNode(value)
        this.#last = this.#last.next
    } else {
        this.#first = new ListNode(value);
        this.#last = this.#first
    }
  }

  dequeue() {
    if (this.#first) {
        let temp = this.#first
        this.#first = temp.next
        return temp.value
    } else {
        return
    }
  }
}

module.exports = {
  Queue
};
