const SinglyLinkedList = require("./SinglyLinkedList");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addNumbers(a, b) {
  if (!a && !b) {
    return null;
  }
  a = new SinglyLinkedList().reverse(a);
  b = new SinglyLinkedList().reverse(b);

  let resultHead = null;
  let resultTail = null;

  let carry = 0;
  while (a || b) {
    let sum = 0;
    if (a && b) {
      sum = a.data + b.data + carry;
      console.log("sum", sum);
      a = a.next;
      b = b.next;
    } else if (a) {
      sum = a.data + carry;
      a = a.next;
    } else {
      sum = b.data + carry;
      b = b.next;
    }

    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    }
    const newNode = new Node(sum);
    if (!resultHead) {
      resultHead = newNode;
      resultTail = newNode;
    } else {
      resultTail.next = newNode;
      resultTail = resultTail.next;
    }
  }
  if (!carry) {
    const carryNode = new Node(carry);
    resultTail.next = carryNode;
  }

  return new SinglyLinkedList().reverse(resultHead);
}

let a = new SinglyLinkedList();
a.insertAtEnd(4);
a.insertAtEnd(9);
a.insertAtEnd(9);

let b = new SinglyLinkedList();
b.insertAtEnd(2);
b.insertAtEnd(9);

const resultHead = addNumbers(a.head, b.head);
new SinglyLinkedList().print(resultHead);
