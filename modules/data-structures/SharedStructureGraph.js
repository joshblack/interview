/**
 * Shared Structure Graph
 *
 */
import invariant from 'fbjs/lib/invariant';

const searchUntil = (array, fn) => {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return i;
    }
  }

  return -1;
};

export default class Graph {
  constructor(spec) {
    this._graph = {};

    if (spec) {
      const { V = [], E = [] } = spec;
      this.addVertices(V);
      this.addEdges(E);
    }
  }

  addVertex({ key, value }) {
    invariant(
      typeof this._graph[key] === 'undefined',
      `You are trying to add the vertex ${key} but it already exists.`
    );

    this._graph[key] = {
      key,
      value,
      edges: [],
    };
  }

  addVertices(vertices) {
    vertices.forEach((vertex) => {
      this.addVertex(vertex);
    });
  }

  addEdge(x, y) {
    invariant(
      this._graph[x].edges.every(({ key }) => !this.adjacent(x, key)),
      `The edge \`${y}\` that you're trying to create already exists ` +
      `on the vertex \`${x}\``
    );

    this._graph[x].edges = this._graph[x].edges.concat(this._graph[y]);
  }

  addEdges(edges) {
    edges.forEach(([x, y]) => {
      this.addEdge(x, y);
    });
  }

  neighbors(key) {
    return this._graph[key].edges;
  }

  adjacent(x, y) {
    const edgeWithKey = searchUntil(
      this._graph[x].edges,
      ({ key }) => key === y
    );

    return edgeWithKey !== -1;
  }
}
