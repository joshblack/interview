/**
 * Graph ADT
 */

/**
 * Adds the vertex x to the graph G.
 *
 * @param {Object} G
 * @param {string} x
 * @returns {Object}
 */
const addVertex = (G, x) => {
  if (G[x]) {
    return G;
  }

  G[x] = [];

  return G;
};

/**
 * Removes the vertex x from the graph G, if x exists.
 *
 * @param {Object} G
 * @param {string} x
 * @returns {Object}
 */
const removeVertex = (G, x) => {
  if (!G[x]) {
    return G;
  }

  delete G[x];

  Object.keys(G).forEach((vertex) => {
    removeEdge(G, vertex, x);
  });

  return G;
};

/**
 * Tests whether there is an edge from vertices x to  y.
 *
 * @param {Object} G
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */
const hasEdge = (G, x, y) => {
  return G[x].indexOf(y) !== -1;
};

const adjacent = hasEdge;

/**
 * Removes the edge from the vertices x to y.
 *
 * @param {Object} G
 * @param {string} x
 * @param {string} y
 * @returns {Object}
 */
const addEdge = (G, x, y) => {
  const g = addVertex(addVertex(G, x), y);

  if (!hasEdge(G, x, y)) {
    g[x] = g[x].concat(y);
  }

  return g;
};

/**
 * Removes the edge from the vertices x to y.
 *
 * @param {Object} G
 * @param {string} x
 * @param {string} y
 * @returns {Object}
 */
const removeEdge = (G, x, y) => {
  const edges = G[x];
  const index = edges.indexOf(y);

  if (hasEdge(G, x, y)) {
    edges.splice(index, 1);
  }

  return G;
};

/**
 * Lists all vertices, y, such that there is an edge from the vertices x to y.
 *
 * @param {Object} G
 * @param {string} x
 * @returns {Array}
 */
const neighbors = (G, x) => {
  return G[x];
};

export const Graph = () => {
    const graph = {};

    return {
      graph: () => graph,
      adjacent: (x, y) => adjacent(graph, x, y),
      addVertex: (x) => addVertex(graph, x),
      removeVertex: (x) => removeVertex(graph, x),
      addEdge: (x, y) => addEdge(graph, x, y),
      removeEdge: (x, y) => removeEdge(graph, x, y),
      neighbors: (x) => neighbors(graph, x),
    };
};
