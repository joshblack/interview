import { getMaxProfitFrom } from '../';

describe('#StockTrading', () => {
  it('should throw if we have less than two prices', () => {
    expect(() => getMaxProfitFrom([]))
      .toThrow();
  });

  it('should get the best profit given an array of stock prices', () => {
    const stockPrices = [20, 30, 25, 50, 100, 60];

    expect(getMaxProfitFrom(stockPrices)).toBe(80);
  });
});
