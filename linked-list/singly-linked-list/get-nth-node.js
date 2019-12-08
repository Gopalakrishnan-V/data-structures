/* 
  Write a function to get Nth node in a Linked List:
  
  Write a GetNth() function that takes a linked list and an integer index and
  returns the data value stored in the node at that index position.
  https://www.geeksforgeeks.org/write-a-function-to-get-nth-node-in-a-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function getNthNode(head, n) {
  if (!head) {
    return null;
  }

  let temp = head;
  let i = 0;
  while (temp) {
    if (i === n) {
      return temp;
    }
    temp = temp.next;
    i++;
  }
  return null;
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(5);
sll.insertAtEnd(10);
sll.insertAtEnd(15);
sll.insertAtEnd(20);

console.log(getNthNode(sll.head, 0));
