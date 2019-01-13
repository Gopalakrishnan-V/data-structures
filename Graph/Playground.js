const Graph = require("./Graph");

let graph = new Graph();
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

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log("DFS:", graph.depthFirstSearch("A"));
console.log("BFS:", graph.breadthFirstSearch("A"));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
