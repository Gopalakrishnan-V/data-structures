/* 
  Program for n’th node from the end of a Linked List:
  
  Given a Linked List and a number n, write a function that 
  returns the value at the n’th node from the end of the Linked List.
  https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function getNthNodeFromEnd(head, n) {
  if (!head) {
    return null;
  }

  let ref = head;
  for (let i = 1; i <= n; i++) {
    if (!ref) {
      return null;
    }
    ref = ref.next;
  }
  let target = head;
  while (ref) {
    ref = ref.next;
    target = target.next;
  }
  return target;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);
sll.insertAtEnd(15);
sll.insertAtEnd(20);
sll.insertAtEnd(25);

console.log(getNthNodeFromEnd(sll.head, 5));
