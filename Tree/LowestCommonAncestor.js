const BinarySearchTree = require("./BinarySearchTree");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function getLowestCommonAncestor(root, n1, n2) {
  if (!root) {
    return null;
  } else if (n1 < root.data && n2 < root.data) {
    return getLowestCommonAncestor(root.left, n1, n2);
  } else if (n1 > root.data && n2 > root.data) {
    return getLowestCommonAncestor(root.right, n1, n2);
  }
  return root;
}

const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

console.log("getLowestCommonAncestor", getLowestCommonAncestor(bst.root, 1,4));
