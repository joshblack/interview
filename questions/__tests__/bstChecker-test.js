jest.unmock('../bstChecker');

import {bstChecker} from '../bstChecker';

const root = {
  value: 50,
  left: {
    value: 30,
    left: {
      value: 20,
    },
    right: {
      value: 40,
    },
  },
  right: {
    value: 80,
    left: {
      value: 70,
    },
    right: {
      value: 90,
    },
  },
};

describe('bstChecker', () => {
  it('should be a function', () => {
    expect(typeof bstChecker).toBe('function');
  });

  it('should work for a single root node', () => {
    expect(bstChecker({value: 10})).toBe(true);
  });

  it('should work for a balanced tree of height 1', () => {
    expect(
      bstChecker({
        value: 20,
        left: {
          value: 10,
        },
        right: {
          value: 30,
        },
      }),
    ).toBe(true);
  });

  it('should throw with an invalid right tree', () => {
    expect(() =>
      bstChecker({
        value: 20,
        left: {
          value: 10,
        },
        right: {
          value: 15,
        },
      }),
    ).toThrow();
  });

  it('should throw with an invalid left tree', () => {
    expect(() =>
      bstChecker({
        value: 20,
        left: {
          value: 40,
        },
        right: {
          value: 30,
        },
      }),
    ).toThrow();
  });
});
