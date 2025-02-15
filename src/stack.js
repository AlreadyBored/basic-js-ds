class Stack {
  constructor() {
    this.items = []; // Changed variable name for better clarity
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined; // Handle empty stack explicitly with helper method
    }
    return this.items.pop();
  }

  peek() {
    return this.isEmpty() ? undefined : this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0; // Helper method to check if stack is empty
  }
}

module.exports = {
  Stack
};
