import {
  Graph,
  addVertex,
  getVertexValue,
} from '../';

describe('Graph', () => {
  it('should work', () => {
    expect(Graph()).toBeDefined();
  });

  describe('#addVertex', () => {
    it('should add a new, unique vertex to the Graph', () => {
      const g = Graph();
      const vertex = {
        name: 'A',
        value: 0,
      };
      const g2 = addVertex(g, vertex);
    });
  });
});
