/* 
  Find length of loop in linked list
  
  Write a function detectAndCountLoop() that checks whether a given Linked List contains loop and if loop is present then returns count of nodes in loop.
  For example, loop is present in below linked list and length of loop is 4. If loop is not present, then function should return 0.
  https://www.geeksforgeeks.org/find-length-of-loop-in-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function countLength(slowPtr) {
  let count = 0;
  let temp = slowPtr;
  while (temp.next !== slowPtr) {
    temp = temp.next;
    count++;
  }
  //count + 1 because we need to add last link also
  return count + 1;
}

function detectLoopAndCountLength(head) {
  if (!head || !head.next) {
    return false;
  }

  let fastPtr = head;
  let slowPtr = head;

  while (fastPtr && fastPtr.next) {
    fastPtr = fastPtr.next.next;
    slowPtr = slowPtr.next;
    if (slowPtr === fastPtr) {
      return countLength(slowPtr);
    }
  }
  return 0;
}

const sll = new SinglyLinkedList();
sll.head = new Node(1);
sll.head.next = new Node(2);
sll.head.next.next = new Node(3);
sll.head.next.next.next = new Node(4);
sll.head.next.next.next.next = new Node(5);
sll.head.next.next.next.next.next = sll.head.next;

console.log(detectLoopAndCountLength(sll.head));
