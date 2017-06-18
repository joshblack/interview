import Heap from '../';

const invalidArray = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

describe('Heap', () => {
  it('should work', () => {
    const h = new Heap(invalidArray);

    console.log(h.toString());
  });

  describe('#toString', () => {
    it('should print a single-node heap', () => {
      const h = new Heap([1]);

      expect(h.toString()).toBe('1');
    });

    it('should print a two-node heap', () => {
      const h = new Heap([1, 2]);

      expect(h.toString()).toBe(` 2
 /
1
`);
    });
  });
});
