/* 
  Remove duplicates from a sorted linked list
  
  Write a function which takes a list sorted in non-decreasing order and
  deletes any duplicate nodes from the list. The list should only be traversed once.
  For example if the linked list is 11->11->11->21->43->43->60
  then removeDuplicates() should convert the list to 11->21->43->60.
  https://www.geeksforgeeks.org/remove-duplicates-from-a-sorted-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = head;

  while (temp.next) {
    if (temp.next.data === temp.data) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
}

/* 11->11->11->21->43->43->60->60 */

const sll = new SinglyLinkedList();
sll.insertAtEnd(11);
sll.insertAtEnd(11);
sll.insertAtEnd(11);
sll.insertAtEnd(21);
sll.insertAtEnd(43);
sll.insertAtEnd(43);
sll.insertAtEnd(60);
sll.insertAtEnd(60);

const uniqueList = removeDuplicates(sll.head);
sll.print(uniqueList);
