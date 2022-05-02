const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor() {
    this.chain = null;
	}

	root() {
		return this.chain.data;
	}

	add(value) {
    this.chain = addWithin(this.chain, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

	has(value) {
    this.chain = addWithin(this.chain, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }

	find(value) {
		return searchWithin(this.chain, value);
		
		function searchWithin(node, value) {
		  if (!node) {
			return false;
		  }

		  if (node.data === value) {
			return true;
		  }

		  return value < node.data ?
			searchWithin(node.left, value) :
			searchWithin(node.right, value);
		  }
	}

	remove(value) {
    this.chain = removeNode(this.chain, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
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
    if (!this.chain) {
      return;
    }

    let node = this.chain;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.chain) {
      return;
    }

    let node = this.chain;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};