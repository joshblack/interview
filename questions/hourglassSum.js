/* @flow */

// Positions that define an "hourglass"
const positions = [[-1, -1], [0, -1], [1, -1], [0, 0], [-1, 1], [0, 1], [1, 1]];

const getHourglassSumFrom = (
  array: Array<Array<number>>,
  x: number,
  y: number,
): number => {
  const sum = positions.reduce((sum, position) => {
    const [xDiff, yDiff] = position;
    return sum + array[y + yDiff][x + xDiff];
  }, 0);

  return sum;
};

/**
 * Problem:
 * https://www.hackerrank.com/challenges/2d-array/problem
 *
 * Constraints:
 * - `container` is an n x n square (probably length 6 from question)
 *
 * If we have an n x n square, we have (n - 2) * (n - 2) "hourglasses"
 */
const hourglassSum = (container: Array<Array<number>>): number => {
  // n x n square
  const size = container.length;
  const sums = [];

  // Move from position 1 -> n - 1 in the y-direction
  for (let i = 1; i < size - 1; i++) {
    // Move from position 1 -> n - 1 in the x-direction
    for (let j = 1; j < size - 1; j++) {
      sums.push(getHourglassSumFrom(container, i, j));
    }
  }

  return Math.max.apply(null, sums);
};

export default hourglassSum;
