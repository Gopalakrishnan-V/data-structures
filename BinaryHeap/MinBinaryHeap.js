class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] >= this.values[parentIndex]) {
        break;
      } else {
        this.swap(this.values, index, parentIndex);
        index = parentIndex;
      }
    }
  }

  extractMin() {
    if (!this.values.length) {
      return undefined;
    } else if (this.values.length === 1) {
      return this.values.pop();
    } else {
      const max = this.values[0];
      const last = this.values.pop();
      this.values[0] = last;
      this.sinkDown();
      return max;
    }
  }

  sinkDown() {
    let index = 0;
    const n = this.values.length;

    while (true) {
      let swapIndex = -1;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      if (leftChildIndex < n) {
        if (this.values[index] > this.values[leftChildIndex]) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < n) {
        if (
          this.values[index] > this.values[rightChildIndex] &&
          this.values[rightChildIndex] < this.values[leftChildIndex]
        ) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === -1) {
        break;
      } else {
        this.swap(this.values, swapIndex, index);
        index = swapIndex;
      }
    }
  }
}

let minBinaryHeap = new MinBinaryHeap();
minBinaryHeap.insert(1);
minBinaryHeap.insert(2);
minBinaryHeap.insert(3);
minBinaryHeap.insert(4);
minBinaryHeap.insert(5);
console.log(minBinaryHeap.values);
console.log(minBinaryHeap.extractMin());
console.log(minBinaryHeap.values);
