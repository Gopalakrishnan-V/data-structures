class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) {
        break;
      } else {
        this.swap(this.values, index, parentIndex);
        index = parentIndex;
      }
    }
  }

  extractMax() {
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
        if (this.values[index] < this.values[leftChildIndex]) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < n) {
        if (
          this.values[index] < this.values[rightChildIndex] &&
          this.values[rightChildIndex] > this.values[leftChildIndex]
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

module.exports = MaxBinaryHeap;
