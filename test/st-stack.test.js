const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const Stack = require('../src/st-stack.js');

it.optional = testOptional;

Object.freeze(assert);

describe('st-stack', () => {
  it.optional('should create a Stack with the methods', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(6);
    stack.push(7);
    assert.strictEqual(stack.peek(), 7);
    assert.strictEqual(stack.pop(), 7);
    assert.strictEqual(stack.peek(), 6);
  });
});
