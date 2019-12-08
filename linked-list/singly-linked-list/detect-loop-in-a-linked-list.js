/* 
  Detect loop in a linked list
  
  Given a linked list, check if the linked list has loop or not. Below diagram shows a linked list with a loop.
  https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function detectLoop(head) {
  if (!head || !head.next) {
    return false;
  }

  let fastPtr = head;
  let slowPtr = head;

  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
    if (slowPtr === fastPtr) {
      return true;
    }
  }
  return false;
}

const sll = new SinglyLinkedList();
sll.head = new Node(1);
sll.head.next = new Node(2);
sll.head.next.next = new Node(3);
sll.head.next.next.next = new Node(4);
sll.head.next.next.next.next = new Node(5);
sll.head.next.next.next.next.next = sll.head.next;

console.log(detectLoop(sll.head));
