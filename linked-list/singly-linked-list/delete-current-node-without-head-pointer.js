const SinglyLinkedList = require("./singly-linked-list");
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteNode(currentNode) {
  currentNode.data = currentNode.next.data;
  currentNode.next = currentNode.next.next;
}

const sll = new SinglyLinkedList();
sll.head = new Node(1);
sll.head.next = new Node(2);
sll.head.next.next = new Node(3);
sll.head.next.next.next = new Node(4);

deleteNode(sll.head.next);
sll.print(sll.head);
