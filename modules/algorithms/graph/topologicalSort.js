import { getVertices, neighbors } from '../../data-structures/ImmutableGraph';

const getRandomVertex = (set) => {
  const index = parseInt(Math.random() * (set.length - 1), 10);

  return set[index];
};

const removeIndex = (array, index) => {
  const arr = array.slice();

  arr.splice(index, 1);

  return arr;
};

const removeElement = (array, element) => {
  return removeIndex(array, array.indexOf(element));
};

/**
 * Most algorithms for topological sorting have a running time that is linear
 * in terms of the number of nodes plus the number of edges, ie O(|V| + |E|).
 */
export const sort = (graph) => {
  const visited = new Set();

  let vertices = getVertices(graph).toJS();
  let sorted = [];

  const search = (vertex) => {
    if (visited.has(vertex)) {
      return;
    }

    visited.add(vertex);

    neighbors(graph, vertex).forEach(({ key, edge }) => {
      if (visited.has(key)) {
        return;
      }

      search(key);
    });

    sorted.push(vertex);
  };

  while (vertices.length > 0) {
    const vertex = getRandomVertex(vertices);

    search(vertex);

    vertices = removeElement(vertices, vertex);
  }

  return sorted.reverse();
};
