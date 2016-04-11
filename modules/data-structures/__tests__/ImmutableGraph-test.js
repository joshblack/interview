import { Map } from 'immutable';
import {
  Graph,
  addVertex,
  addVertices,
  removeVertex,
  getVertexValue,
  setVertexValue,
  addEdge,
  addEdges,
  removeEdge,
  adjacent,
  neighbors,
} from '../ImmutableGraph';

describe('ImmutableGraph', () => {
  describe('addVertex', () => {
    it('should add a vertex to a graph', () => {
      const g = addVertex(Map(), 'a', 1);

      expect(g.toJS()).toEqual({
        a: {
          value: 1,
          edges: [],
        }
      });
    });

    it('should warn if you\'re adding a vertex that already exists', () => {
      const g = addVertex(Map(), 'a', 1);

      expect(() => addVertex(g, 'a', 1)).toThrow();
    });
  });

  describe('addVertices', () => {
    it('should add a collection of vertices to a graph', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ]);

      expect(g.toJS()).toEqual({
        a: {
          value: 1,
          edges: [],
        },
        b: {
          value: 2,
          edges: [],
        },
      });
    });
  });

  describe('removeVertices', () => {
    it('should remove a vertex from a graph', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ]);

      expect(g.toJS()).toEqual({
        a: {
          value: 1,
          edges: [],
        },
        b: {
          value: 2,
          edges: [],
        },
      });

      expect(removeVertex(g, 'a').toJS()).toEqual({
        b: {
          value: 2,
          edges: [],
        },
      });
    });

    it('should remove a vertex and any edges that it exists in from a graph', () => {
      const vertices = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ];
      const edges = [
        ['a', 'b'],
      ];
      const g = Graph(vertices, edges);

      expect(removeVertex(g, 'a').toJS()).toEqual({
        b: {
          value: 2,
          edges: [],
        },
      });
    });
  });

  describe('getVertexValue', () => {
    it('should get the value of a vertex', () => {
      const g = addVertex(Map(), 'a', 1);

      expect(getVertexValue(g, 'a')).toBe(1);
    });
  });

  describe('setVertexValue', () => {
    it('should update the value of a vertex', () => {
      const g = addVertex(Map(), 'a', 1);
      const g1 = setVertexValue(g, 'a', 2);

      expect(getVertexValue(g1, 'a')).toBe(2);
    });
  });

  describe('addEdge', () => {
    it('should add an edge between two vertices in a graph', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ]);

      expect(addEdge(g, 'a', 'b').toJS()).toEqual({
        a: {
          value: 1,
          edges: ['b'],
        },
        b: {
          value: 2,
          edges: [],
        },
      });
    });

    it('should add multiple edges', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
      ]);
      const g1 = addEdge(addEdge(g, 'a', 'b'), 'a', 'c');

      expect(g1.toJS()).toEqual({
        a: {
          value: 1,
          edges: ['b', 'c'],
        },
        b: {
          value: 2,
          edges: [],
        },
        c: {
          value: 3,
          edges: [],
        },
      });
    });

    it('should warn if you try to add an edge to a vertex that doesn\'t exist', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
      ]);

      expect(() => addEdge(g, 'a', 'b')).toThrow();
    });
  });

  describe('addEdges', () => {
    it('should add multiple edges to a graph', () => {
      const g = addVertices(Map(), [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
        { key: 'c', value: 3 },
      ]);
      const g1 = addEdges(g, [
        ['a', 'b'],
        ['a', 'c'],
      ]);

      expect(g1.toJS()).toEqual({
        a: {
          value: 1,
          edges: ['b', 'c'],
        },
        b: {
          value: 2,
          edges: [],
        },
        c: {
          value: 3,
          edges: [],
        },
      });
    });
  });

  describe('neighbors', () => {
    it('should get the edges of a vertex', () => {
      const vertices = [
        { key: 'a', value: 1 },
        { key: 'b', value: 2 },
      ];
      const edges = [
        ['a', 'b'],
      ];
      const g = Graph(vertices, edges);
      const n = neighbors(g, 'a');

      expect(n.get(0).key).toBe('b');
      expect(n.get(0).edge).toBeDefined();
    });
  });

  it('should initialize a Graph with vertices and edges', () => {
    const vertices = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ];
    const edges = [
      ['a', 'b'],
      ['b', 'a'],
    ];
    const g = Graph(vertices, edges);

    expect(g.toJS()).toEqual({
      a: {
        value: 1,
        edges: ['b'],
      },
      b: {
        value: 2,
        edges: ['a'],
      },
    });
  });
});
