const SinglyLinkedList = require("./singly-linked-list");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function merge(a, b) {
  let head = null;
  let tail = null;
  while (a || b) {
    let newNode = null;
    if (a && b) {
      if (a.data < b.data) {
        newNode = new Node(a.data);
        a = a.next;
      } else {
        newNode = new Node(b.data);
        b = b.next;
      }
    } else if (a) {
      newNode = new Node(a.data);
      a = a.next;
    } else {
      newNode = new Node(b.data);
      b = b.next;
    }

    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
  }
  return head;
}

let sll1 = new SinglyLinkedList();
sll1.insertAtEnd(101);
sll1.insertAtEnd(103);
sll1.insertAtEnd(105);

let sll2 = new SinglyLinkedList();
sll2.insertAtEnd(102);
sll2.insertAtEnd(104);

const mergedHead = merge(sll1.head, sll2.head);
new SinglyLinkedList().print(mergedHead);
