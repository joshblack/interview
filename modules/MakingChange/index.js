/**
 * Say you're given:
 *
 * - an amount of money
 * - an array of coin denominations
 *
 * Write a function that finds the number of ways to use the given coin
 * denominations to equal the amount of money.
 *
 * Questions:
 *
 * - What is the unit of the money?
 * - What is the type each value in the array of coin denominations?
 * - Is the amount > 0? Equal to 0? Ever less than 0?
 * - Is the denominations array guaranteed to have a combination that could
 *   create the value given?
 * - Is the denominations array sorted?
 * - Is the denominations array a set of distinct elements?
 *
 * For this question:
 *
 * - amount: number
 * - denominations: Array<number>
 *
 * Example:
 *
 * Given amount = 4, denominations = [1, 2, 3], fn(amount, denominations) = 4.
 *
 * 1. [1, 1, 1, 1]
 * 2. [1, 1, 2[
 * 3. [1, 3]
 * 4. [2, 2]
 *
 * @tag greedy-algorithm
 * @flow
 */

export const changePermutations = (
  amount: number,
  denoms: Array<number>
): number => {
  return 1;
};
