import { sort } from '../topologicalSort';
import { Graph } from '../../../data-structures/ImmutableGraph';

// Graph taken from the Wikipedia example for Topological sorting:
// https://en.wikipedia.org/wiki/File:Directed_acyclic_graph_2.svg
const vertices = [
  { key: 2, value: 0 },
  { key: 3, value: 0 },
  { key: 5, value: 0 },
  { key: 7, value: 0 },
  { key: 8, value: 0 },
  { key: 9, value: 0 },
  { key: 10, value: 0 },
  { key: 11, value: 0 },
];
const edges = [
  // The vertex with key 3 has edges to 8 and 10
  [3, 8],
  [3, 10],

  // The vertex with key 8 has one edge to 9
  [8, 9],

  // The vertex with key 7 has an edge to 8 and 11
  [7, 8],
  [7, 11],

  // The vertex with key 5 has an edge to just 11
  [5, 11],

  // The vertex with key 11 has edges to 2, 9, and 10
  [11, 2],
  [11, 9],
  [11, 10],
];
const graph = Graph(vertices, edges);

describe('topologicalSort', () => {
  it('should work', () => {
    const sorted = sort(graph);
    const precedence = {
      2: [],
      3: [8, 10],
      7: [8, 11],
      8: [9],
      9: [],
      5: [11],
      10: [],
      11: [2, 9, 10],
    };

    Object.keys(precedence).forEach((vertex) => {
      const edges = precedence[vertex];
      const vertexIndex = sorted.indexOf(vertex);

      edges.forEach((edge) => {
        const edgeIndex = sorted.indexOf(edge);

        expect(vertexIndex).toBeLessThan(edgeIndex);
      });
    });
  });
});
