const { Node } = require('../extensions/list-tree.js');

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
            return;
        }

        const insertNode = (node, data) => {
            if (data < node.data) {
                if (!node.left) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, data);
                }
            } else if (data > node.data) {
                if (!node.right) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, data);
                }
            }
        };

        insertNode(this.rootNode, data);
    }

    has(data) {
        return this.find(data) !== null;
    }

    find(data) {
        let currentNode = this.rootNode;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
        }
        return null;
    }

    remove(data) {
        const removeNode = (node, data) => {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
            } else {
                // Node to be deleted
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    return node.right;
                }
                if (!node.right) {
                    return node.left;
                }

                // Node with two children
                let minRight = this.findMin(node.right);
                node.data = minRight;
                node.right = removeNode(node.right, minRight);
            }
            return node;
        };

        this.rootNode = removeNode(this.rootNode, data);
    }

    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    min() {
        if (!this.rootNode) {
            return null;
        }
        return this.findMin(this.rootNode);
    }

    max() {
        let currentNode = this.rootNode;
        while (currentNode && currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode ? currentNode.data : null;
    }
}

module.exports = {
    BinarySearchTree
};
