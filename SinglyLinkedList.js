class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  //Insertion
  insertAtBeginning(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtPosition(position, data) {
    let newNode = new Node(data);
    if (!this.head) {
      head = newNode;
      return;
    }
    if (position === 0) {
      this.insertAtBeginning(data);
    }
    let index = 0;
    let previous = this.head;
    while (index != position - 1 && previous) {
      previous = previous.next;
    }
    if (previous) {
      newNode.next = previous.next;
      previous.next = newNode;
    }
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = newNode;
    }
  }

  //Deletion
  deleteFirstNode() {}

  deleteLastNode() {}

  deleteByKey() {}

  deleteByPosition() {}

  //Other functions
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  print() {
    let current = this.head;
    console.log("List: ");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverse() {}
}

const sll = new SinglyLinkedList();
sll.insertAtEnd(3);
sll.insertAtEnd(4);
sll.insertAtEnd(5);
sll.insertAtBeginning(1);
sll.insertAtPosition(1, 2);
// sll.print();
// console.log(sll.size());
