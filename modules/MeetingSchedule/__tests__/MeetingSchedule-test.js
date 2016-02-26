import { condenseMeetingTimes } from '../';

describe('#condenseMeetingTimes', () => {
  it('should condense a collection of meeting times', () => {
    const result = condenseMeetingTimes([
      [0, 1], [3, 5], [4, 8], [10, 12], [9, 10]
    ]);

    expect(result).toEqual([[0, 1], [3, 8], [9, 12]]);
  });
});
