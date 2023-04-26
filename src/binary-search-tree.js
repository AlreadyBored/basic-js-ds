
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }


  findMin() {
    if (!this.left) {
      return this;
    }
    return this.left.findMin();
  }

  removeChild(nodeToRemove) {
    if (this.left && this.left === nodeToRemove) {
      this.left = null;
      return true;
    }

    if (this.right && this.right === nodeToRemove) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          newNode.parent = currentNode;
          return;
        }
        currentNode = currentNode.left;

      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          newNode.parent = currentNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }


  has(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      }
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      }
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    const nodeToRemove = this.find(data);
    const parent = nodeToRemove.parent;
    debugger
    if (nodeToRemove.data === data) {
      if (!nodeToRemove.left && !nodeToRemove.right) {
        if (parent) {
          parent.removeChild(nodeToRemove);
        } else {
          nodeToRemove.data = null;
        }
        debugger
      }
      if (nodeToRemove.left && nodeToRemove.right) {
        const nextBiggerNode = nodeToRemove.right.findMin();
        debugger
        if (nextBiggerNode.data === nodeToRemove.right.data) {
          nodeToRemove.data = nodeToRemove.right.data;
          nodeToRemove.right = nodeToRemove.right.right;
        } else {
          this.remove(nextBiggerNode.data);
          nodeToRemove.data = nextBiggerNode.data;
        }
      }
      else {
        const childNode = nodeToRemove.left || nodeToRemove.right;
        if (parent) {
          parent.replaceChild(nodeToRemove, childNode);
        } else {
          this.root = childNode;
        }
      }
      nodeToRemove.parent = null;
      return true;
    }
  }


  min() {
    let currentNode = this.root;
    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      } else {
        currentNode = currentNode.left;
      }
    }
    return null;
  }

  max() {
    let currentNode = this.root;
    while (currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }
}




const myTree = new BinarySearchTree();
myTree.add(27);
myTree.add(14);
myTree.add(35);
myTree.add(10);
myTree.add(19);
myTree.add(31);
myTree.add(42);
myTree.add(2);
myTree.add(3);
myTree.add(15);
myTree.add(16);
myTree.add(54);
myTree.add(86);
myTree.add(11);
myTree.add(166);
myTree.remove(14)
console.log(myTree)

module.exports = {
  BinarySearchTree
};