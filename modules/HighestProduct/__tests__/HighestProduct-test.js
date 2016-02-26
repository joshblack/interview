import { highestProduct } from '../';

describe('#highestProduct', () => {
  it('should throw if not given an array as input', () => {
    expect(() => highestProduct()).toThrow();
  });

  it('should throw if given less than 3 numbers in the input array', () => {
    expect(() => highestProduct([1, 2])).toThrow();
  });

  it('should find the largest product of three numbers given an array of elements', () => {
    const result = highestProduct([2, 3, 1, 2, 3, 5, 5, 7, 8, 9, 10]);

    expect(result).toBe(720);
  });
});
