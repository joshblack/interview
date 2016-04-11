import { List, Map } from 'immutable';
import invariant from 'fbjs/lib/invariant';

export const Graph = (V, E) => {
  return addEdges(addVertices(Map(), V), E);
};

export const addVertex = (G, key, value) => {
  invariant(
    !G.has(key),
    `The vertex ${key} already exists in the Graph.`,
  );

  return G.set(key, Map({
    value,
    edges: List(),
  }));
};

export const addVertices = (G, vertices) => {
  const graph = vertices.reduce((graph, { key, value }) => {
    return graph.set(key, Map({
      value,
      edges: List(),
    }));
  }, Map());

  return G.merge(graph);
};

export const removeVertex = (G, key) => {
  const g = G.delete(key);

  return g.map((vertex) => {
    const edgeIndex = vertex.get('edges').indexOf(key);

    return vertex.update('edges', (list) => list.delete(edgeIndex));
  });
};

export const getVertexValue = (G, key) => {
  return G.get(key).get('value');
};

export const setVertexValue = (G, key, value) => {
  return G.setIn([key, 'value'], value);
};

export const addEdge = (G, x, y) => {
  invariant(
    G.has(x) && G.has(y),
    `Expected the vertices ${x} and ${y} to exist.`,
  );

  return G.update(x, (value) => Map({
    value: value.get('value'),
    edges: value.get('edges').push(y),
  }));
};

export const addEdges = (G, edges) => {
  const e = edges.reduce((graph, [x, y]) => {
    return graph.set(x, Map({
      value: G.get(x).get('value'),
      edges: List([y]),
    }));
  }, Map());

  return G.merge(e);
};

export const removeEdge = (G, x, y) => {
  const edgeIndex = G.get(x).get('edges').indexOf(y);

  if (edgeIndex === -1) {
    return G;
  }

  return G.updateIn([x, 'edges'], (list) => list.delete(edgeIndex));
};

export const adjacent = (G, x, y) => {
  return G.get(x).get('edges').indexOf(y) !== -1;
};

export const neighbors = (G, x) => {
  return G.get(x).get('edges').map((key) => G.get(key));
};
