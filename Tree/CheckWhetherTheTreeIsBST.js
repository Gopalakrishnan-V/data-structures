const BinarySearchTree = require("./BinarySearchTree");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function isBST(root) {
  let lastVisitedNodeData = Number.MIN_VALUE;
  const isBstRec = root => {
    if (!root) {
      return true;
    }
    if (!isBstRec(root.left)) {
      return false;
    }

    if (root.data < lastVisitedNodeData) {
      return false;
    }
    lastVisitedNodeData = root.data;

    if (!isBstRec(root.right)) {
      return false;
    }
    return true;
  };
  return isBstRec(root);
}

const tree = new BinarySearchTree();
tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.right = new Node(7);
tree.root.left.left = new Node(1);
tree.root.right.right = new Node(100);

console.log("isBST", isBST(tree.root));
