import { NotImplementedError } from '../extensions/index.js'

import { Node } from '../extensions/list-tree.js'

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
export default class BinarySearchTree {
  constructor() {
    this.roots = null
  }
  root() {
    return this.roots
  }

  add(data) {
    this.roots = addData(this.roots, data)
    function addData(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addData(node.left, data)
      } else {
        node.right = addData(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchData(this.roots, data)
    function searchData(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (data < node.data) {
        return searchData(node.left, data)
      } else {
        return searchData(node.right, data)
      }
    }
  }

  find(data) {
    return searchData(this.roots, data)
    function searchData(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        return searchData(node.left, data)
      } else {
        return searchData(node.right, data)
      }
    }
  }

  remove(data) {
    this.root = removeNode(this.roots, data)
    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let rightMin = node.right
        while (rightMin.left) {
          rightMin = rightMin.left
        }
        node.data = rightMin.data
        node.right = removeNode(node.right, rightMin.data)
        return node
      }
    }
  }

  min() {
    if (!this.roots) {
      return
    }
    let node = this.roots
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.roots) {
      return
    }
    let node = this.roots
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}
