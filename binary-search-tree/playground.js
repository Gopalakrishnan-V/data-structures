const BinarySearchTree = require("./binary-search-tree");
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

let bst = new BinarySearchTree();

bst.insert(9);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(21);

console.log("Maximum Height: ", bst.getMaximumHeight(bst.root));
