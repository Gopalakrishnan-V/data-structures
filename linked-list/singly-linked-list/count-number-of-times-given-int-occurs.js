/* 
  Write a function that counts the number of times a given int occurs in a Linked List
  
  Given a singly linked list and a key, count number of occurrences of given key in linked list.
  For example, if given linked list is 1->2->1->2->1->3->1 and given key is 1, then output should be 4.
  https://www.geeksforgeeks.org/write-a-function-that-counts-the-number-of-times-a-given-int-occurs-in-a-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function count(head, key) {
  let count = 0;
  let temp = head;
  while (temp) {
    if (temp.data === key) {
      count++;
    }
    temp = temp.next;
  }
  return count;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);

console.log(count(sll.head, 5));
