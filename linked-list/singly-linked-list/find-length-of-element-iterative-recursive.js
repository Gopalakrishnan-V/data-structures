/* 
  Find Length of a Linked List (Iterative and Recursive):
  
  Write a function to count the number of nodes in a given singly linked list.
  https://www.geeksforgeeks.org/find-length-of-a-linked-list-iterative-and-recursive/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function getLengthIterative(head) {
  let count = 0;
  let temp = head;
  while (temp) {
    temp = temp.next;
    count++;
  }
  return count;
}

function getLengthRecursive(head) {
  if (!head) {
    return 0;
  } else {
    return 1 + getLengthRecursive(head.next);
  }
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);
sll.insertAtEnd(15);
sll.insertAtEnd(20);

console.log(getLengthIterative(sll.head));
console.log(getLengthRecursive(sll.head));
