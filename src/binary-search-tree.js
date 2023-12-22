const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.node = null
  }

  root() {
    return this.node
  }

  add(data) {
    this.node = addWithin(data, this.node)
    function addWithin(data, node) {
      if (!node) {
        return new Node(data)
      }
      if (data === node.data) {
        return node
      }
      if (node.data > data) {
        node.right = addWithin(data, node.right)
      } else {
        node.left = addWithin(data, node.left)
      }
      return node
    }
  }

  has(data) {
    return hasData(this.node, data)
    function hasData(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {

        return hasData(node.right, data)
      } else {
        return hasData(node.left, data)
      }
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};