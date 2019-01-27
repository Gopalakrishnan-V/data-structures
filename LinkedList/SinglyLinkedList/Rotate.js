const SinglyLinkedList = require("./SinglyLinkedList");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function rotate(head, k) {
  if (!head || !k) {
    return head;
  }

  let tail = head;
  while (tail.next) {
    tail = tail.next;
  }

  for (let i = 1; i <= k; i++) {
    tail.next = new Node(head.data);
    tail = tail.next;
    head = head.next;
  }

  return head;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(10);
sll.insertAtEnd(20);
sll.insertAtEnd(30);
sll.insertAtEnd(40);
sll.insertAtEnd(50);
sll.insertAtEnd(60);

sll.head = rotate(sll.head, 4);
sll.print(sll.head);
