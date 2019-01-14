const Graph = require("./Graph");
const WeightedGraph = require("./WeightedGraph");

// let graph = new Graph();
// graph.addVertex("Agara");
// graph.addVertex("Bellandur");
// graph.addVertex("Marathalli");
// graph.addVertex("Silkboard");
// graph.addVertex("Majestic");

// graph.addEdge("Agara", "Bellandur");
// graph.addEdge("Agara", "Silkboard");
// graph.addEdge("Silkboard", "Majestic");
// graph.addEdge("Bellandur", "Marathalli");

// // graph.removeEdge("Agara", "Bellandur");

// console.log("\nBefore\n",  graph.adjacencyList, "\n");
// graph.removeVertex("Bellandur");
// console.log("\nAfter\n",  graph.adjacencyList, "\n");

// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addVertex("D")
// graph.addVertex("E")
// graph.addVertex("F")

// graph.addEdge("A", "B")
// graph.addEdge("A", "C")
// graph.addEdge("B","D")
// graph.addEdge("C","E")
// graph.addEdge("D","E")
// graph.addEdge("D","F")
// graph.addEdge("E","F")
// console.log("DFS:", graph.depthFirstSearch("A"));
// console.log("BFS:", graph.breadthFirstSearch("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.dijkstra("C", "F"));
