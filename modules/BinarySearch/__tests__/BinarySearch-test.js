import { BinarySearchIterative, BinarySearchRecursive } from '../BinarySearch';

describe('#BinarySearch', () => {
  describe('#BinarySearchRecursive', () => {
    it('should throw with an empty set');
    it('should return index 0 with a set of one element');
    it('should throw when given a set that does not contain all integers');
    it('should return the position of an arbitrary integer in a set', () => {
      const target = 1;
      const set = [1, 2, 3];

      expect(BinarySearchRecursive(target, set)).toBe(0);
    });
  });

  describe('#BinarySearchIterative', () => {
    it('should throw with an empty set');
    it('should return index 0 with a set of one element');
    it('should throw when given a set that does not contain all integers');
    it('should return the position of an arbitrary integer in a set', () => {
      const target = 1;
      const set = [1, 2, 3];

      expect(BinarySearchIterative(target, set)).toBe(0);
    });
  });
});
