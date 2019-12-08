/* 
  Function to check if a singly linked list is palindrome
  
  Given a singly linked list of characters,
  write a function that returns true if the given list is a palindrome, else false.
  R --> A --> D --> A --> R
  https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }

  const stack = [];
  /* Push all the nodes into the stack */

  let temp = head;
  while (temp) {
    stack.push(temp);
    temp = temp.next;
  }

  /* Iterate the list again to check*/
  temp = head;
  while (temp) {
    const top = stack.pop();
    if (top.data !== temp.data) {
      return false;
    }
    temp = temp.next;
  }
  return true;
}

const sll = new SinglyLinkedList();
sll.head = new Node("R");
sll.head.next = new Node("A");
sll.head.next.next = new Node("D");
sll.head.next.next.next = new Node("A");
sll.head.next.next.next.next = new Node("R");

console.log(isPalindrome(sll.head));
