const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
        this.rootOtTree = null;
    }

  root() {
     if (this.rootOtTree) {
        return this.rootOtTree;
     } else {
         return null;
     }

  }

  add(data) {
    if (this.rootOtTree) {
        let current = this.rootOtTree;
        let previos = null;
        while (current) {
            previos = current;
            if (current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        if (previos.data > data) {
            previos.left = new Node(data);
        } else {
            previos.right = new Node(data);
        }
    } else {
        this.rootOtTree = new Node(data)
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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