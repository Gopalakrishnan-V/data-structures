const SinglyLinkedList = require("./singly-linked-list");

function swapNodes(head, x, y) {
  if (!head) {
    return null;
  } else if (x === y) {
    return head;
  }

  //Find X
  let previousX = null;
  let currentX = head;
  while (currentX && currentX.data !== x) {
    previousX = currentX;
    currentX = currentX.next;
  }

  //Find Y
  let previousY = null;
  let currentY = head;
  while (currentY && currentY.data !== y) {
    previousY = currentY;
    currentY = currentY.next;
  }

  // If x or y not present in the list
  if (!currentX || !currentY) {
    return head;
  }

  if (previousX) {
    // If x is not the head
    previousX.next = currentY;
  } else {
    // x is the head
    head = currentY;
  }

  if (previousY) {
    // If y is not the head
    previousY.next = currentX;
  } else {
    // y is the head
    head = currentX;
  }

  //Swap next of both nodes
  const temp = currentX.next;
  currentX.next = currentY.next;
  currentY.next = temp;

  this.head = head;
  return head;
}

let sll = new SinglyLinkedList();
sll.insertAtEnd(1);
sll.insertAtEnd(2);
sll.insertAtEnd(3);
sll.insertAtEnd(4);
sll.insertAtEnd(5);
sll.insertAtEnd(6);

sll.head = swapNodes(sll.head, 2, 5);
sll.print(sll.head);
