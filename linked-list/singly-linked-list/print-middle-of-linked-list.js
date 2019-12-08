/* 
  Find the middle of a given linked list in C and Java
  
  Given a singly linked list, find middle of the linked list.
  For example, if given linked list is 1->2->3->4->5 then output should be 3.
  If there are even nodes, then there would be two middle nodes, we need to print second middle element.
  For example, if given linked list is 1->2->3->4->5->6 then output should be 4.
  https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function getMiddle(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let fastPtr = head;
  let slowPtr = head;
  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
  }
  return slowPtr;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);
sll.insertAtEnd(15);
sll.insertAtEnd(20);
sll.insertAtEnd(25);

console.log(getMiddle(sll.head, 5));
