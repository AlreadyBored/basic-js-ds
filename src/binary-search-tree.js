class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const node = new Node(data);
    if (!this._root) {
      this._root = node;
      return;
    }
    let cur = this._root;
    while (true) {
      if (data === cur.data) return; 
      if (data < cur.data) {
        if (cur.left) cur = cur.left;
        else { cur.left = node; return; }
      } else {
        if (cur.right) cur = cur.right;
        else { cur.right = node; return; }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let cur = this._root;
    while (cur) {
      if (data === cur.data) return cur;
      cur = data < cur.data ? cur.left : cur.right;
    }
    return null;
  }

  remove(data) {
    this._root = this._removeRec(this._root, data);
  }

  _removeRec(node, data) {
    if (!node) return null;

    if (data < node.data) {
      node.left = this._removeRec(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeRec(node.right, data);
      return node;
    } else {
      
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let succ = node.right;
      while (succ.left) succ = succ.left;
      node.data = succ.data;
      node.right = this._removeRec(node.right, succ.data);
      return node;
    }
  }

  min() {
    if (!this._root) return null;
    let cur = this._root;
    while (cur.left) cur = cur.left;
    return cur.data;
  }

  max() {
    if (!this._root) return null;
    let cur = this._root;
    while (cur.right) cur = cur.right;
    return cur.data;
  }
}

module.exports = {
  BinarySearchTree
};
