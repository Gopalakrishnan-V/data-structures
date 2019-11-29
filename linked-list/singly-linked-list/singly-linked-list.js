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
    if (position === 0) {
      this.insertAtBeginning(data);
      return;
    }
    let index = 0;
    let previous = this.head;
    while (index !== position - 1 && previous) {
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
  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  deleteLastNode() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = null;
    let current = this.head;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    if (previous) {
      previous.next = null;
    }
  }

  deleteByKey(key) {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.head = this.head.next;
      return;
    }
    let previous = null;
    let current = this.head;

    while (current && current.data !== key) {
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
    }
  }

  deleteByPosition(position) {
    if (!this.head) {
      return;
    }
    if (position === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = null;
    let current = this.head;
    for (let i = 0; i < position && current; i++) {
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
    }
  }

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

  print(head) {
    if (!head) {
      console.log("Cannot print the list. Please check the head.");
    }
    let current = head;
    console.log("List: ");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverse(head) {
    if (!head) {
      return null;
    }

    let previous = null;
    let current = head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    return previous;
  }
}

module.exports = SinglyLinkedList;
