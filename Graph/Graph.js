class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    );
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].map(adjacentVertex => {
      this.adjacencyList[adjacentVertex] = this.adjacencyList[
        adjacentVertex
      ].filter(v => v !== vertex);
    });
    delete this.adjacencyList[vertex];
  }

  depthFirstSearch(start) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    const dfsRecursive = function(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].map(neighbour => {
        if (!visited[neighbour]) {
          dfsRecursive(neighbour);
        }
      });
    };
    dfsRecursive(start);
    return result;
  }

  breadthFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visited = {};
    visited[start] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].map(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return result;
  }
}

module.exports = Graph;
