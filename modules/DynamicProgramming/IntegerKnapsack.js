/**
 * The 0/1 (integer) knapsack problem is a classic Dynamic Programming problem.
 *
 * Typically, the problem statement is that we have a bag that has a maximum
 * weight limit, and we are given a list of items with a given weight and
 * value.
 *
 * The goal is to find the combination of items that maximize value while still
 * staying under the weight limit of your bag.
 *
 * Notes:
 *
 *   - The total weight, weight of an item, and value can all be Floating Point
 *     numbers
 *   - You can either include an item, or not. No splitting up of an item is
 *     allowed
 *
 * @tag dynamic-programming
 * @flow
 */
type Item = {
  weight: number,
  value: number,
};

export const IntegerKnapsack = (
  weight: number,
  items: Array<Item>,
): number => {
  const results = Array(...Array(items.length))
    .map(() => Array(weight + 1).fill(0));

  for (let i = 0; i < items.length; i++) {
    for (let j = 1; j < weight + 1; j++) {
      const { weight, value } = items[i];

      if (j < weight) {
        results[i][j] = results[i - 1][j];
      } else {
        if (i === 0) {
          results[i][j] = value;
        } else {
          results[i][j] = Math.max(
            value + results[i - 1][j - weight],
            results[i - 1][j]
          );
        }
      }
    }
  }

  let maxValue = 0;

  for (let i = 0; i < items.length; i++) {
    if (results[i][weight] > maxValue) {
      maxValue = results[i][weight]
    }
  }

  return maxValue;
};
