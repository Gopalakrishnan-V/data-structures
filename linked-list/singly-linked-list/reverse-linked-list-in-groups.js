const SinglyLinkedList = require("./singly-linked-list");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseInGroups(head, k) {
  if (!head) {
    return null;
  }
  let current = head;
  let i = 1;

  let previous = null;
  let next = null;

  while (i <= k && current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }
  head.next = reverseInGroups(current, k);
  return previous;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(1);
sll.insertAtEnd(2);
sll.insertAtEnd(3);
sll.insertAtEnd(4);
sll.insertAtEnd(5);
// sll.insertAtEnd(6);
sll.head = reverseInGroups(sll.head, 3);
sll.print(sll.head);
