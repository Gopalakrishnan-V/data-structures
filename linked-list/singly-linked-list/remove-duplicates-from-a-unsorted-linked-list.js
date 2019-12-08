/* 
  Remove duplicates from an unsorted linked list
  
  Write a removeDuplicates() function which takes a list and
  deletes any duplicate nodes from the list. The list is not sorted.
  For example if the linked list is 12->11->12->21->41->43->21
  then removeDuplicates() should convert the list to 12->11->21->41->43.
  https://www.geeksforgeeks.org/remove-duplicates-from-an-unsorted-linked-list/
*/

const SinglyLinkedList = require("./singly-linked-list");
const Node = require("./singly-linked-list").Node;

function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let temp = head;
  let set = new Set();
  set.add(temp.data);

  while (temp.next) {
    if (set.has(temp.next.data)) {
      // Duplicate
      temp.next = temp.next.next;
    } else {
      // Add item to the set
      set.add(temp.next.data);
      temp = temp.next;
    }
  }
  return head;
}

/* 12->11->12->21->41->43->21 */

const sll = new SinglyLinkedList();
sll.insertAtEnd(12);
sll.insertAtEnd(11);
sll.insertAtEnd(12);
sll.insertAtEnd(21);
sll.insertAtEnd(41);
sll.insertAtEnd(43);
sll.insertAtEnd(21);

const uniqueList = removeDuplicates(sll.head);
sll.print(uniqueList);
