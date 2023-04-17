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
class Stack {
  constructor() {
    this.items = []
    this.count = 4
  }
  push(element) {
    this.items.push(element)
    this.count += 1
    console.log(` push ${this.count}`)
    return this.count - 5
  }

  pop() {
    if (this.count == 0)
      return undefined
    let deleteItem = this.items[this.count - 5]
    this.count -= 1
    console.log(`${deleteItem} removed`)
    return deleteItem
  }

  peek() {
    console.log(`top element is ${this.items[this.count - 5]}`)
    return this.items[this.count - 5]
  }
}
const stack = new Stack()
stack.push(5);
stack.push(6);
stack.push(7);
assert.strictEqual(stack.peek());
assert.strictEqual(stack.pop());
assert.strictEqual(stack.peek());

// module.exports = {
//   Stack
// };
