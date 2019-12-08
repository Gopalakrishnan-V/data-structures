/* 
  Search an element in a Linked List (Iterative and Recursive):
  
  Write a function that searches a given key ‘x’ in a given singly linked list.
  The function should return true if x is present in linked list and false otherwise.
  https://www.geeksforgeeks.org/search-an-element-in-a-linked-list-iterative-and-recursive/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function searchIterative(head, x) {
  if (!head) {
    return false;
  }
  let temp = head;
  while (temp) {
    if (temp.data === x) {
      return true;
    }
    temp = temp.next;
  }
  return false;
}

function searchRecursive(head, x) {
  if (!head) {
    return false;
  } else if (head.data === x) {
    return true;
  } else {
    return searchRecursive(head.next, x);
  }
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);
sll.insertAtEnd(15);
sll.insertAtEnd(20);

// console.log(searchIterative(sll.head, 0));
console.log(searchRecursive(sll.head, 10));
