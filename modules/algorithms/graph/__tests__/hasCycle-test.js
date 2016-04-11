import { hasCycle } from '../hasCycle';
import { Graph } from '../../../data-structures/ImmutableGraph';

const vertices = [
  { key: 'a', value: 1 },
  { key: 'b', value: 1 },
  { key: 'c', value: 1 },
  { key: 'd', value: 1 },
  { key: 'e', value: 1 },
  { key: 'f', value: 1 },
];
const edges = [
  ['a', 'b'],
  ['a', 'c'],
  ['b', 'c'],
  ['d', 'a'],

  // Cycle
  ['d', 'e'],
  ['e', 'f'],
  ['f', 'd'],
];
const graph = Graph(vertices, edges);

describe('hasCycle', () => {
  it('should work', () => {
    const cycle = hasCycle(graph);

    expect(cycle).toBeDefined();
    expect(cycle).toEqual(['d', 'e', 'f']);
  });
});
