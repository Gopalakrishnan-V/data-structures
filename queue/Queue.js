class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.items.shift();
    }
    return undefined;
  }

  print() {
    console.log("Item List:");
    this.items.map(item => console.log(item));
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();

queue.print();
