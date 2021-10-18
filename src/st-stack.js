const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {

  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(element) {
    this.arr[this.index] = element;
    this.index += 1;
  }

  pop() {
    if (this.arr[1]) {
      const popEl = this.arr[this.index - 1];
      this.arr = this.arr.slice(0, this.index - 1);
      this.index -= 1;
      return popEl;
    } return undefined;
  }

  peek() {
    return this.arr[this.index - 1];
  }
}
