const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root_node = null
  }
  root() {
    return this.root_node
  }

  add(data) {
    if (!this.root_node) {
      this.root_node = new Node(data)
    } else {
      let temp_node = this.root_node
      while (true) {
        if (data < temp_node.data) {
          if (temp_node.left == null) {
            temp_node.left = newNode(data)
            break
          } else {
            temp_node = temp_node.left
          }
        } else if (data > temp_node.data) {
          if (temp_node.right == null) {
            temp_node.right = new Node(data)
            break
          } else {
            temp_node = temp_node.right
          }
        } else {
          console.log('data is already exist')
        }
      }
    }
  }

  has(data) {
    if (!this.root_node) {
      return false
    } else {
      let temp_node = this.root_node
      while (true) {
        if (data < temp_node.data) {
          if (temp_node.left == null) {
            return false
          } else {
            temp_node = temp_node.left
          }
        } else if (data > temp_node.data) {
          if (temp_node.right == null) {
            return false
          } else {
            temp_node = temp_node.right
          }
        } else {
          return true
        }
      }
    }
  }

  find(data) {
    if (!this.root_node) {
      return null
    } else {
      let temp_node = this.root_node
      while (true) {
        if (data < temp_node.data) {
          if (temp_node.left == null) {
            return null
          } else {
            temp_node = temp_node.left
          }
        } else if (data > temp_node.data) {
          if (temp_node.right == null) {
            return null
          } else {
            temp_node = temp_node.right
          }
        } else {
          return temp_node
        }
      }
    }
  }

  remove(data) {
    this.root_node = this._removeInner(data, this.root_node);
  }
  _removeInner(value, node) {
    if (node) {
      if (value < node.value) {
        node.left = this._removeInner(value, node.left);
      } else if (value > node.value) {
        node.right = this._removeInner(value, node.right);
      } else if (node.left && node.right) {
        node.value = this.findMinValue(node.right);
        node.right = this._removeInner(node.value, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }

  findMinValue(node) {
    let temp_node = node
    while (temp_node.left) {
      temp_node = temp_node.left
    }
    return temp_node
  }

  min() {
    let temp_node = this.root_node
    while (temp_node.left) {
      temp_node = temp_node.left
    }
    return temp_node.left
  }

  max() {
    let temp_node = this.root_node
    while (temp_node.right) {
      temp_node = temp_node.right
    }
    return temp_node.right
  }
}

btree = new BinarySearchTree()
btree.add(12)
btree.add(5)
btree.add(4)
btree.add(2)
btree.add(20)
btree.remove(2)
console.log(btree.has(2))
// console.log(btree.root())
// module.exports = {
//   BinarySearchTree
// };