import { IntegerKnapsack } from '../IntegerKnapsack';

const weight = 7;
const items = [
  {
    weight: 1,
    value: 1,
  },
  {
    weight: 3,
    value: 4,
  },
  {
    weight: 4,
    value: 5,
  },
  {
    weight: 5,
    value: 7,
  }
];

describe('#IntegerKnapsack', () => {
  it('should work', () => {
    const result = IntegerKnapsack(weight, items);

    expect(result).toBe(9);
  });
});
