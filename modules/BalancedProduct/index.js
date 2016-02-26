/**
 * Given an array of integers, iterate through each index and find the product
 * of every integer _except_ the integer at that index.
 *
 * For example:
 *
 * Input:
 * [1, 2, 3]
 *
 * Output:
 * [6, 3, 2]
 *
 * Process:
 * [2 * 3, 1 * 3, 2 * 1]
 *
 * @flow
 */
import invariant from 'invariant';

/**
 * Solution:
 * O(n) time and O(n) space
 */
export const BalancedProduct = (numbers: Array<number>): Array<number> => {
  invariant(
    Array.isArray(numbers),
    'Expected an array of numbers, instead got %s',
    numbers
  );

  invariant(
    numbers.length >= 2,
    'Expected an array with at least 2 elements, instead got %s',
    numbers
  );

  let productSoFar = 1;

  // Keep track of all the cumulative products going from the beginning to the
  // end of the given array
  const productsExceptAtIndex = numbers.map((number) => {
    const result = productSoFar;

    productSoFar = productSoFar * number;

    return result;
  });

  productSoFar = 1;

  // Work backwards, multiplying the current product against the cumulative
  // sum that we already tracked
  for (let i = numbers.length - 1; i >= 0; i--) {
    productsExceptAtIndex[i] = productsExceptAtIndex[i] * productSoFar;

    productSoFar = productSoFar * numbers[i];
  }

  return productsExceptAtIndex;
};
