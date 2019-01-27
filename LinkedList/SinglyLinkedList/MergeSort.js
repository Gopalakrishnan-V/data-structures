const SinglyLinkedList = require("./SinglyLinkedList");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MergeSort {
  getMiddle(head) {
    if (!head) {
      return null;
    }
    let slow = head;
    let fast = head.next;
    while (fast) {
      fast = fast.next;
      if (fast) {
        slow = slow.next;
        fast = fast.next;
      }
    }
    return slow;
  }

  merge(a, b) {
    let resultHead = null;
    let resultTail = null;

    while (a || b) {
      let newNode = null;
      if (a && b) {
        if (a.data < b.data) {
          newNode = new Node(a.data);
          a = a.next;
        } else {
          newNode = new Node(b.data);
          b = b.next;
        }
      } else if (a) {
        newNode = new Node(a.data);
        a = a.next;
      } else {
        newNode = new Node(b.data);
        b = b.next;
      }
      if(!resultHead){
          resultHead = newNode;
          resultTail = newNode;
      }
      else{
          resultTail.next = newNode;
          resultTail = resultTail.next;
      }
    }
    return resultHead;
  }

  sort(head){
      if(!head || head.next){
          return head;
      }
      const middle = this.getMiddle(head);
      const nextOfMiddle = middle.next;
      middle.next = null;

      const left = this.sort(head);
      const right = this.sort(nextOfMiddle);
      return this.merge(left, right);
  }
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(60);
sll.insertAtEnd(50);
sll.insertAtEnd(40);
sll.insertAtEnd(30);
sll.insertAtEnd(20);
sll.insertAtEnd(10);

sll.head = new MergeSort().sort(sll.head);
sll.print(sll.head);
