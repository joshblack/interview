/**
 * Suppose we have access to yesterday's stock prices as an array, where:
 *
 * - The indices are the time in minutes past trade opening time, which
 *   starts at 9:30am local time
 * - The values are the price in dollars of X's stock at that time
 *
 * Write a function that takes in an array of stock prices for yesterday that
 * returns the best profit we could have made from 1 purchase and 1 sale of
 * a stock yesterday.
 *
 * Note: you must buy before you sell, and you may not buy and sell at the
 * same moment
 *
 * @flow
 */
import invariant from 'invariant';

export const getMaxProfitFrom = (stockPrices: Array<number>): number => {
  invariant(
    stockPrices.length >= 2,
    'Expected at least two stock prices in the input, instead got: %s',
    stockPrices
  );

  let minPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const price = stockPrices[i];

    if (price < minPrice) {
      minPrice = price;
    }

    if ((price - minPrice) > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};
