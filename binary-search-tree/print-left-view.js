const BinarySearchTree = require("./binary-search-tree");

function printLeftView(root) {
  let maxLevel = 0;
  const printLeftViewRec = function(root, level) {
    if (!root) {
      return;
    }
    if (maxLevel < level) {
      maxLevel = level;
      console.log(root.data);
    }
    printLeftViewRec(root.left, level + 1);
    printLeftViewRec(root.right, level + 1);
  };
  printLeftViewRec(root, 1);
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(10);
bst.insert(30);
bst.insert(20);
bst.insert(40);

printLeftView(bst.root);
