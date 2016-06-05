import Graph from '../SharedStructureGraph';

describe('SharedStructureGraph', () => {
  it('should report if two vertices are adjacent', () => {
    const g = new Graph();

    g.addVertices([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);

    g.addEdge('a', 'b');

    expect(g.adjacent('a', 'b')).toBe(true);
  });

  it('should return the neighbors of a given vertex', () => {
    const g = new Graph();

    g.addVertices([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);

    g.addEdge('a', 'b');

    expect(g.neighbors('a')).toEqual([{
      key: 'b',
      value: 2,
      edges: [],
    }]);

    expect(g.neighbors('b')).toEqual([]);
  });

  it('should warn if you\'re trying to create an edge that already exists', () => {
    const g = new Graph();

    g.addVertices([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ]);

    g.addEdge('a', 'b');
    expect(() => g.addEdge('a', 'b')).toThrow();
  });

  it('should be able to be created with vertices and edges', () => {
    const graph = new Graph({
      V: [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ],
      E: [
        ['a', 'b'],
      ],
    });

    const bVertex = {
      key: 'b',
      value: 2,
      edges: [],
    };

    const aVertex = {
      key: 'a',
      value: 1,
      edges: [
        bVertex,
      ],
    };

    expect(graph._graph).toEqual({
      a: aVertex,
      b: bVertex,
    });
  });
});
