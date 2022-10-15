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
	constructor(x = null) {
		this.value = x
		this.next = null
	}

	getUnderlyingList() {
		return this;
	}

	enqueue(v) {
		this.value === null ? this.value = v : this.next == null ? this.next = new Queue(v) : this.enqueue.call(this.next, v);
	}

	dequeue() {
		let r = this.value
		this.value = this.next.value
		this.next = this.next.next
		return r
	}
}

module.exports = {
	Queue
};
