class Node {
  constructor(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
  }
}

class MyStack {
  constructor() {
    this.head = null;
    this.middle = null;
    this.count = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.count) {
      this.head = newNode;
      this.middle = newNode;
      this.count++;
      return;
    }

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.count++;
    if (this.count % 2 === 0) {
      this.middle = this.middle.previous;
    }
  }

  pop() {
    if (this.count === 1) {
      const temp = this.head;
      this.head = null;
      this.middle = null;
      this.count = 0;
      return temp;
    }

    const temp = this.head;
    this.head = this.head.next;
    this.head.previous = null;
    this.count--;

    if (this.count % 2 !== 0) {
      this.middle = this.middle.next;
    }
    return temp;
  }

  findMiddle() {
    if (!this.count) {
      console.log("Stack is empty!");
      return null;
    }
    return this.middle.data;
  }
}

const ms = new MyStack();
ms.push(7);
ms.push(3);
ms.push(4);
ms.push(2);
ms.pop();
ms.pop();
ms.pop();
ms.pop();
console.log(ms.findMiddle());
