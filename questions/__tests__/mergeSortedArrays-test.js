jest.unmock('../mergeSortedArrays');

import { mergeSortedArrays } from '../mergeSortedArrays';

describe('mergeSortedArrays', () => {
  it('should be a function', () => {
    expect(typeof mergeSortedArrays).toBe('function');
  });

  it('should only accept arrays as inputs', () => {
    expect(() => mergeSortedArrays(1, 2)).toThrow();
  });

  it('should correctly sort arrays with the same length', () => {
    const a = [0, 2, 4];
    const b = [1, 3, 5];

    expect(mergeSortedArrays(a, b)).toEqual([0, 1, 2, 3, 4, 5]);
  });

  it('should sort arrays with varying length', () => {
    const a = [3, 4];
    const b = [0, 1, 2];

    expect(mergeSortedArrays(a, b)).toEqual([0, 1, 2, 3, 4]);
  });
});
