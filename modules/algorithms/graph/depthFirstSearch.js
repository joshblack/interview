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
        fn(edge.get('value'), key, true);
        return;
      }

      fn(edge.get('value'), key, false);

      visited[key] = true;
      search(key);

      fn(edge.get('value'), key, true);
    });
  };

  vertices.forEach((key) => {
    if (!visited[key]) {
      fn(graph.get(key).get('value'), key, false);

      visited[key] = true;
      search(key);

      fn(graph.get(key).get('value'), key, true);
    }
  });
};
