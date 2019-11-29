const SinglyLiinkedList = require("./singly-linked-list");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addOne(a) {
  if (!a) {
    return new Node(1);
  }

  let resultHead = null;
  let resultTail = null;

  a = new SinglyLiinkedList().reverse(a);
  let carry = 1;

  while (a) {
    let sum = a.data + carry;
    if (sum > 9) {
      carry = 1;
      sum = sum - 10;
    } else {
      carry = 0;
    }
    const newNode = new Node(sum);
    if (!resultHead) {
      resultHead = newNode;
      resultTail = newNode;
    } else {
      resultTail.next = newNode;
      resultTail = resultTail.next;
    }
    a = a.next;
  }

  if(carry>0){
      resultTail.next = new Node(carry);
  }
  return new SinglyLiinkedList().reverse(resultHead);
}

const sll = new SinglyLiinkedList();
sll.insertAtEnd(9);
sll.insertAtEnd(9);
sll.insertAtEnd(9);

const resultHead = addOne(sll.head);
sll.print(resultHead);
