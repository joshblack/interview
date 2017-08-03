jest.unmock('invariant');
jest.unmock('../newPositionInArray.js');

import {positionNewArray} from '../newPositionInArray';

describe('newPositionInArray', () => {
  it('should accept two arrays', () => {});

  it('should throw if the arrays are not of the same length', () => {
    expect(() => positionNewArray([], [1])).toThrow();
  });

  it('should make sure that the next position is in bounds', () => {
    expect(() => positionNewArray([0], [1])).toThrow();
  });

  it('should make sure each new position is unique', () => {
    expect(() => positionNewArray([0, 1], [1, 1])).toThrow();
  });

  it('should work with two element arrays', () => {
    const input = [0, 1];
    const reverse = [1, 0];

    positionNewArray(input, reverse);

    expect(input).toEqual([1, 0]);
  });

  xit('should work with multi-element arrays', () => {
    const input = [0, 1, 2];
    const nextPositions = [1, 2, 0];

    positionNewArray(input, nextPositions);

    expect(input).toEqual([2, 0, 1]);
  });

  xit('should work with an arbitrary array', () => {
    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const nextPositions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    positionNewArray(input, nextPositions);

    expect(input).toEqual([9, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
