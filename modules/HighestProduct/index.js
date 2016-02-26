/**
 * Given an array of integers, find the highest product that you can get from
 * picking out three of the integers.
 *
 * Questions to ask:
 *
 *   - Are the integers positive?
 *   - Am I guaranteed to have an array of 3 numbers?
 *
 * @flow
 */
import invariant from 'invariant';

/**
 * Solution:
 * O(n) run time and O(1) space
 *
 * Bonus:
 *   - What if we wanted the highest product of `k` items?
 */
export const highestProduct = (numbers: Array<number>): number => {
  invariant(
    Array.isArray(numbers),
    'Expected an array of numbers as input, instead got %s',
    numbers
  );

  invariant(
    numbers.length >= 3,
    'Expected an array of at least 3 numbers, instead got %s',
    numbers
  );

  const initialPartialProduct = numbers[0] * numbers[1];

  // Keep track of the highest and lowest number
  let highestNumber = Math.max(numbers[0], numbers[1]);
  let lowestNumber = Math.min(numbers[0], numbers[1]);

  // Keep track of partial products with 2 numbers
  let lowestProductOfTwo = initialPartialProduct;
  let highestProductOfTwo = initialPartialProduct;

  // Maintain the highest product
  let highestProduct = initialPartialProduct * numbers[2];

  for (let i = 2; i < numbers.length; i++) {
    const current = numbers[i];

    // Check to see if we have a new highest product
    highestProduct = Math.max(
      highestProduct,
      highestProductOfTwo * current,
      lowestProductOfTwo * current
    );

    // Update partial product if needed
    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      current * highestNumber,
      current * lowestNumber
    );

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      current * highestNumber,
      current * lowestNumber
    );

    lowestNumber = Math.min(lowestNumber, current);
    highestNumber = Math.max(highestNumber, current);
  }

  return highestProduct;
};
