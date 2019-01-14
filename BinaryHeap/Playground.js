const MinBinaryHeap = require("./MinBinaryHeap");
const MaxBinaryHeap = require("./MaxBinaryHeap");
const PriorityQueue = require("./PriorityQueue");

// let maxBinaryHeap = new MaxBinaryHeap();
// maxBinaryHeap.insert(1);
// maxBinaryHeap.insert(2);
// maxBinaryHeap.insert(3);
// maxBinaryHeap.insert(4);
// maxBinaryHeap.insert(5);
// console.log(maxBinaryHeap.values);
// console.log(maxBinaryHeap.extractMax());
// console.log(maxBinaryHeap.values);

// let minBinaryHeap = new MinBinaryHeap();
// minBinaryHeap.insert(1);
// minBinaryHeap.insert(2);
// minBinaryHeap.insert(3);
// minBinaryHeap.insert(4);
// minBinaryHeap.insert(5);
// console.log(minBinaryHeap.values);
// console.log(minBinaryHeap.extractMin());
// console.log(minBinaryHeap.values);

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("Iphone X", 1);
priorityQueue.enqueue("Iphone 8", 2);
priorityQueue.enqueue("Iphone 7", 3);
priorityQueue.enqueue("Iphone 6", 4);
priorityQueue.enqueue("Iphone SE", 5);
console.log(priorityQueue.values);
console.log("Extracted: ", priorityQueue.dequeue());
console.log(priorityQueue.values);
