const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;  // Renamed from rootNode for clarity
    this.tail = null;  // Renamed from tailNode for clarity
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.tail) {
      // If the queue is empty, both head and tail are the same node
      this.head = this.tail = newNode;
    } else {
      // Add the new node to the end of the queue
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;  // Move the head pointer to the next node
    if (!this.head) {
      // If the queue becomes empty, reset the tail to null as well
      this.tail = null;
    }
    return value;
  }
}

module.exports = {
  Queue
};
