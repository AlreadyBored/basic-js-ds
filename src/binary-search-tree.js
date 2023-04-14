const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.$root = null;
  }

  root() {
    return this.$root ;
  }

  add( data ) {
    this.$root = addWithIn(this.$root , data);

    function addWithIn( node, data) {
      if (!node) {
        return new Node(data);
      }

      if ( node.data === data) {
        return node;
      }

      if ( data < node.data) {
        node.left = addWithIn( node.left , data );
      }
      else {
        node.right = addWithIn( node.right , data );
      }
      return node;
    }
  }

  has( data ) {
    return searchWitnIn( this.$root, data);

    function searchWitnIn( node, data) {
      if (!node) {
        return false;
      }

      if ( node.data === data) {
        return true;
      }
      return data < node.data ? searchWitnIn( node.left, data) : searchWitnIn( node.right, data)
    }
  }

  find( data ) {
    return searchWitnData( this.$root, data);

    function searchWitnData( node, data) {
      if (!node) {
        return null;
      }

      if ( node.data === data) {
        return node;
      }
      return data < node.data ? searchWitnData( node.left, data) : searchWitnData( node.right, data)
    }
  }

  remove( data ) {
    this.$root = removeNodeLis(this.$root, data);

    function removeNodeLis( node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNodeLis( node.left, data );
        return node;
      }
      else if( node.data < data) {
        node.right = removeNodeLis( node.right, data );
        return node;
      }
      else {
        if (!node.left && !node.right){
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromR = node.right;
        while (minFromR.left) {
          minFromR = minFromR.left;
        }

        node.data = minFromR.data;

        node.right = removeNodeLis(node.right, minFromR.data)

        return node;


      }
    }
  }

  min() {
    if (!this.$root) {
      return;
    }
    let node = this.$root;
    while( node.left) {   
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.$root) {
      return;
    }
    let node = this.$root;
    while( node.right) {   
      node = node.right;
    }
    return node.data;
  }

}

module.exports = {
  BinarySearchTree
};