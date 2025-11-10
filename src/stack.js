class Stack {
  constructor() {
    this._arr = [];
  }
  push(value) {
    this._arr.push(value);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
}

module.exports = {
  Stack
};
