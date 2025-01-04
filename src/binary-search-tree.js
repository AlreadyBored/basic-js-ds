const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data); 
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      let currentNode = this.treeRoot;
      while (true) {
        if (data < currentNode.data) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let currentNode = this.treeRoot;
    while (currentNode !== null) {
      if (data === currentNode.data) {
        return currentNode;
      }
      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return null;
  }

  remove(data) {
    this.treeRoot = this._removeNode(this.treeRoot, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      let minRightNode = this._findMinNode(node.right);
      node.data = minRightNode.data;
      node.right = this._removeNode(node.right, minRightNode.data);
      return node;
    }
  }

  min() {
    const minNode = this._findMinNode(this.treeRoot);
    return minNode ? minNode.data : null;
  }

  _findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  max() {
    let currentNode = this.treeRoot;
    while (currentNode && currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode ? currentNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};