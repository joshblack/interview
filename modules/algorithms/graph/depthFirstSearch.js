import {
  getVertices,
  neighbors,
} from '../../data-structures/ImmutableGraph';

export const dfs = (graph, fn) => {
  const vertices = getVertices(graph);
  const visited = vertices.reduce((acc, key) => ({
    ...acc,
    [key]: false,
  }), {});

  const search = (vertex) => {
    neighbors(graph, vertex).forEach(({ key, edge }) => {
      if (visited[key]) {
        return;
      }

      fn(edge.get('value'), key, edge)
      visited[key] = true;
      search(key);
    });
  };

  vertices.forEach((key) => {
    if (!visited[key]) {
      fn(graph.get(key).get('value'), key, graph.get(key));
      visited[key] = true;
      search(key);
    }
  });
};
