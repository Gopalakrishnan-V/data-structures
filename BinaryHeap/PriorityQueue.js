class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  insert(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority) {
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
        if (
          this.values[index].priority > this.values[leftChildIndex].priority
        ) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < n) {
        if (
          this.values[index].priority > this.values[rightChildIndex].priority &&
          this.values[rightChildIndex].priority <
            this.values[leftChildIndex].priority
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

module.exports = PriorityQueue;
