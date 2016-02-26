import { BalancedProduct } from '../';

describe('#BalancedProduct', () => {
  it('should throw if not given an array', () => {
    expect(() => BalancedProduct()).toThrow();
  });

  it('should throw if given an empty array or a single element', () => {
    expect(() => BalancedProduct([])).toThrow();
    expect(() => BalancedProduct([1])).toThrow();
  });

  it('should work with at least 2 elements', () => {
    expect(BalancedProduct([3, 1])).toEqual([1, 3]);
  });

  it('should work with n elements', () => {
    expect(BalancedProduct([3, 1, 2, 5, 6, 4]))
      .toEqual([240, 720, 360, 144, 120, 180]);
  });
});
