class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  printPreOrder(root = this.root) {
    if (!root) {
      return;
    }
    console.log(root.data);
    if (root.left) {
      this.printPreOrder(root.left);
    }
    if (root.right) {
      this.printPreOrder(root.right);
    }
  }

  printInOrder(root = this.root) {
    if (!root) {
      return;
    }
    if (root.left) {
      this.printPreOrder(root.left);
    }
    console.log(root.data);
    if (root.right) {
      this.printPreOrder(root.right);
    }
  }

  printPostOrder(root = this.root) {
    if (!root) {
      return;
    }
    if (root.left) {
      this.printPreOrder(root.left);
    }
    if (root.right) {
      this.printPreOrder(root.right);
    }
    console.log(root.data);
  }

  breadthFirstSearch(root = this.root){
    if(!root){
      return [];
    }
    let result = [];
    let queue = [];
    queue.push(root);
    while(queue.length){
      const current = queue.shift();
      result.push(current.data);
      if(current.left){
        queue.push(current.left);
      }
      if(current.right){
        queue.push(current.right);
      }
    }
    return result;
  }

  insert(data) {
    this.root = this.insertRec(this.root, data);
  }

  insertRec(root, data) {
    if (!root) {
      return new Node(data);
    } else if (data < root.data) {
      root.left = this.insertRec(root.left, data);
    } else {
      root.right = this.insertRec(root.right, data);
    }
    return root;
  }

  getMinValue(root = this.root) {
    if (!root) {
      return null;
    }
    let current = root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  delete(data) {
    this.root = this.deleteRec(this.root, data);
  }

  deleteRec(root, data) {
    if (!root) {
      return null;
    } else if (data < root.data) {
      root.left = this.deleteRec(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteRec(root.right, data);
    } else {
      // Delete node is root
      if (!root.left) {
        root = root.right;
      } else if (!root.right) {
        root = root.left;
      } else {
        const minValue = this.getMinValue(root.right);
        root.data = minValue;
        root.right = this.deleteRec(root.right, minValue);
      }
    }
    return root;
  }
  
}

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
