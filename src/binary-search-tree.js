const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    const node = new Node(data)

    if (this._root === null) {
      this._root = node
    } else {
      let current = this._root

      while (true) {
        if (data < current.data) {
          if (current.left === null) {
            current.left = node
            break
          } else {
            current = current.left
          }
        } else if (data > current.data) {
          if (current.right === null) {
            current.right = node
            break
          } else {
            current = current.right
          }
        } else {
          break
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null
  }

  find(data) {
    let current = this._root

    while (current !== null) {
      if (data === current.data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }

    return null
  }

  remove(data) {
    let current = this._root
    let parent = null
    let node = null
    let childCount = 0

    while (current !== null) {
      if (data === current.data) {
        node = current
        break
      } else if (data < current.data) {
        parent = current
        current = current.left
      } else {
        parent = current
        current = current.right
      }
    }

    if (node === null) return

    if (node.left !== null && node.right !== null) {
      childCount = 2
    } else if (node.left !== null || node.right !== null) {
      childCount = 1
    }

    if (childCount === 0) {
      if (parent === null) {
        this._root = null
      } else {
        if (parent.left === node) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    } else if (childCount === 1) {
      if (parent === null) {
        this._root = node.left || node.right
      } else {
        if (parent.left === node) {
          parent.left = node.left || node.right
        } else {
          parent.right = node.left || node.right
        }
      }
    } else {
      let smallest = node.right
      let smallestParent = node

      while (smallest.left !== null) {
        smallestParent = smallest
        smallest = smallest.left
      }

      node.data = smallest.data

      if (smallestParent.left === smallest) {
        smallestParent.left = smallest.right
      } else {
        smallestParent.right = smallest.right
      }
    }
  }

  min() {
    if (this._root === null) return

    let current = this._root

    while (current.left !== null) {
      current = current.left
    }

    return current.data
  }
  max() {
    if (!this._root) return null

    let node = this._root
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree,
}
