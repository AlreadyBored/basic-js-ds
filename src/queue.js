class Queue {
  constructor() {
    this.head = null; 
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head; 
  }

  enqueue(value) {
    const node = { value, next: null }; 
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) return undefined;
    const val = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return val;
  }
}

module.exports = {
  Queue
};
