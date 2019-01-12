class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    return undefined;
  }

  print() {
    console.log("Item List:");
    this.items.map(item => console.log(item));
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();

stack.print();
