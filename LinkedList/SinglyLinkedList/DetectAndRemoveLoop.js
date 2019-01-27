const SinglyLinkedList = require("./SinglyLinkedList");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (!head || !head.next) {
    return null;
  }
  let slow = head;
  let fast = head;
  slow = slow.next;
  fast = fast.next.next;

  while (fast && fast.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (slow === fast) {
    slow = head;
    while (slow.next !== fast.next) {
      slow = slow.next;
      fast = fast.next;
    }
    fast.next = null;
  }
}

const sll = new SinglyLinkedList();
sll.head = new Node(1);
sll.head.next = new Node(2);
sll.head.next.next = new Node(3);
sll.head.next.next.next = new Node(4);
sll.head.next.next.next.next = new Node(5);
sll.head.next.next.next.next.next = new Node(6);
sll.head.next.next.next.next.next.next = new Node(7);
sll.head.next.next.next.next.next.next.next = new Node(8);
sll.head.next.next.next.next.next.next.next.next = new Node(9);

sll.head.next.next.next.next.next.next.next.next.next = sll.head.next.next;

detectAndRemoveLoop(sll.head);
sll.print(sll.head);
