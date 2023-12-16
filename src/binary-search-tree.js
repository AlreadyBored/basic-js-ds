const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._rootNode = null;
  }

  root() {
    return this._rootNode;
  }

  add(data) {
    class Node {
      constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }

    this._rootNode = addWithIn(this._rootNode, data);

    function addWithIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithIn(node.left, data);
      } else {
        node.right = addWithIn(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data) {
    return findWithIn(this._rootNode, data);

    function findWithIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data
        ? findWithIn(node.left, data)
        : findWithIn(node.right, data);
    }
  }

  remove(data) {
    this._rootNode = removeNode(this._rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this._rootNode) {
      return;
    }

    let currentNode = this._rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this._rootNode) {
      return;
    }

    let currentNode = this._rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
