const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null; 
  }
  
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return this;
    }

    let current = this.rootNode;
    while (true) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = newNode;
          return this;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  has(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove( data ) {
    const removeNode = (rootNode, data) => {
      if (!rootNode) return null;
        
      if (data > rootNode.data) {
        rootNode.right = removeNode(rootNode.right, data);
        return rootNode;
      }
  
      if (data < rootNode.data) {
        rootNode.left = removeNode(rootNode.left, data);
        return rootNode;
      }
  
      if (!rootNode.left) return rootNode.right;
      if (!rootNode.right) return rootNode.left;
  
      let min = rootNode.right;
      while (min.left) min = min.left;
  
      rootNode.data = min.data;
      rootNode.right = removeNode(rootNode.right, min.data);
  
      return rootNode;
    };
  
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let current = this.rootNode;
    if (!current) return null;

    while (current.left) current = current.left;
    
    return current.data;
  }

  max() {
    let current = this.rootNode;
    if (!current) return null;

    while (current.right) current = current.right;
    
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};