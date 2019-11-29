const SinglyLinkedList = require("./singly-linked-list");

function swapNodes(head, x, y) {
  if (!head) {
    return null;
  } else if (x === y) {
    return head;
  }

  let newHead = null;

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

  //If x is not the head
  if (previousX) {
    previousX.next = currentY;
  } else {
    newHead = currentY;
  }

  //If y is not the head
  if (previousY) {
    previousY.next = currentX;
  } else {
    currentX = head;
  }

  const temp = currentX.next;
  currentX.next = currentY.next;
  currentY.next = temp;

  return newHead ? newHead : head;
}

let sll = new SinglyLinkedList();
sll.insertAtEnd(1);
sll.insertAtEnd(2);
sll.insertAtEnd(3);
sll.insertAtEnd(4);
sll.insertAtEnd(5);
sll.insertAtEnd(6);

sll.head = swapNodes(sll.head, 2, 5);
sll.print();