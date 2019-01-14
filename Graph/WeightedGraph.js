class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  swap(arr, x, y) {
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
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

  dequeue() {
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, end) {
    const priorityQueue = new PriorityQueue();
    const distances = {};
    const previous = {};

    //Initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        priorityQueue.enqueue(vertex, 0);
        distances[vertex] = 0;
      } else {
        priorityQueue.enqueue(vertex, Infinity);
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      let smallest = priorityQueue.dequeue().value;
      if ((smallest === end)) {
        let result = [];
        while (previous[smallest]) {
          result.push(smallest);
          smallest = previous[smallest];
        }
        result.push(start);
        return result.reverse();
      } else if (distances[smallest] !== Infinity) {
        this.adjacencyList[smallest].map(neighbour => {
          const newDistance = distances[smallest] + neighbour.weight;
          if (newDistance < distances[neighbour.node]) {
            previous[neighbour.node] = smallest;
            distances[neighbour.node] = newDistance;
            priorityQueue.enqueue(neighbour.node, newDistance);
          }
        });
      }
    }
  }
}

module.exports = WeightedGraph;
