const BinarySearchTree = require("./BinarySearchTree");

let bst = new BinarySearchTree();
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(0);
bst.insert(5);

// bst.delete(3);
// bst.delete(2);

// console.log("PREORDER:");
// bst.printPreOrder();

// console.log("INORDER:");
// bst.printInOrder();

// console.log("POSTORDER:");
// bst.printPostOrder();

console.log("BFS:");
console.log(bst.breadthFirstSearch());
