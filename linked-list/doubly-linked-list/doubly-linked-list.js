class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      this.head.previous = newNode;
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
      if (newNode.next) {
        newNode.next.previous = newNode;
      }
    }
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = new Node(data);
      return;
    } else {
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = newNode;
      newNode.previous = last;
    }
  }

  //Deletion
  deleteFirstNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    if (this.head) {
      this.head.previous = null;
    }
  }

  deleteLastNode() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    if (last.previous) {
      last.previous.next = null;
    }
  }

  deleteByKey(key) {
    if (!this.head) {
      return;
    }
    if (this.head.data === key) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
      return;
    }
    let current = this.head;
    while (current) {
      if (current.data === key) {
        if (current.next) {
          current.next.previous = current.previous;
        }
        if (current.previous) {
          current.previous.next = current.next;
        }
        return;
      }
      current = current.next;
    }
  }

  deleteByPosition(position) {
    if (!this.head) {
      return null;
    }
    if (position === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.previous = null;
      }
      return;
    }
    let current = this.head;
    for (let i = 0; i < position && current; i++) {
      current = current.next;
    }
    if (current) {
      if (current.next) {
        current.next.previous = current.previous;
      }
      current.previous.next = current.next;
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

  reverse(head) {
    let current = head;
    let previous = null;
    while (current) {
      const next = current.next;
      current.next = current.previous;
      current.previous = next;
      previous = current;
      current = next;
    }
    return previous;
  }

  print() {
    let current = this.head;
    console.log("List: ");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

module.exports = DoublyLinkedList;
