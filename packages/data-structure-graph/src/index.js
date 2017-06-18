/**
 * `Graph` Reference Implementation.
 *
 * In computer science, a graph is an abstract data type that is meant to
 * implement the undirected graph and directed graph concepts from mathematics.
 *
 * A graph data structure consists of a finite (and possibly mutable) set of
 * vertices or nodes or points, together with a set of unordered pairs of these
 * vertices for an undirected graph or a set of ordered pairs for a directed
 * graph.
 *
 * @author Josh Black
 */

const Graph = () => {
  return new WeakMap();
};

const addVertex = (g, vertex, edges = []) => {
  g.set(vertex, edges);

  return g;
};

const getVertexValue = (g, vertex) => {
  return g.get(vertex).value;
};

const addEdge = (g, x, y) => {
  const vertexX = g.get(x);
  const vertexY = g.get(y);

  g.set(x, [...vertexX, y]);
  g.set(y, [...vertexY, x]);

  return g;
};

/**
 * There are multiple ways to represent a graph, each with their own
 * trade-offs. Here, we'll implement an Adjaceny List represenation.
 */
export {
  Graph,
  addVertex,
  getVertexValue,
  addEdge,
};

// export default class Graph<T> {
  // constructor() {
  // }

  // adjacent(x: GraphVertex, y: GraphVertex): boolean {
  // }

  // neighbors(x: GraphVertex): Array<GraphVertex> {
  // }


  // removeVertex(x: GraphVertex): void {
  // }

  // addEdge(x: GraphVertex, y: GraphVertex): void {
  // }

  // removeEdge(x: GraphVertex, y: GraphVertex): void {
  // }

  // getVertexValue(x: GraphVertex): T {
  // }

  // setVertexValue(x: GraphVertex, value: T): void {
  // }

  // getEdgeValue(x: GraphVertex, y: GraphVertex): T {
  // }

  // setEdgeValue(x: GraphVertex, y: GraphVertex, value :T): void {
  // }
// }
