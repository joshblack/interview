import {
  Graph,
} from '../SimpleGraph';

describe('SimpleGraph', () => {
  it('should allow us to add vertices', () => {
    const { addVertex } = Graph();

    const g1 = addVertex('a');
    expect(g1).toEqual({ a: [] });

    const g2 = addVertex('b');
    expect(g2).toEqual({ a: [], b: [] });
  });

  it('should allow us to add directed edges', () => {
    const { addVertex, addEdge, graph } = Graph();

    addVertex('a');
    addVertex('b');
    addEdge('a', 'b');

    expect(graph()).toEqual({
      a: ['b'],
      b: [],
    })
  });

  it('should allow us to remove edges', () => {
    const { addVertex, addEdge, removeEdge, graph } = Graph();

    addVertex('a');
    addVertex('b');
    addEdge('a', 'b');
    removeEdge('a', 'b');

    expect(graph()).toEqual({
      a: [],
      b: [],
    })
  });

  it('should allow us to remove vertices', () => {
    const { addVertex, removeVertex, addEdge, graph } = Graph();

    addVertex('a');
    addVertex('b');
    addEdge('a', 'b');
    addEdge('b', 'a');

    expect(graph()).toEqual({
      a: ['b'],
      b: ['a'],
    })

    removeVertex('a');

    expect(graph()).toEqual({
      b: [],
    })
  });

  it('should let us check if two vertices are adjacent', () => {
    const { addVertex, addEdge, adjacent } = Graph();

    addVertex('a');
    addVertex('b');
    addEdge('a', 'b');

    expect(adjacent('a', 'b')).toBe(true);
  });

  it('should let us list all the neighbors of a vertex', () => {
    const { addVertex, addEdge, neighbors } = Graph();

    addVertex('a');
    addVertex('b');
    addEdge('a', 'b');

    expect(neighbors('a')).toEqual(['b']);
  });
});
