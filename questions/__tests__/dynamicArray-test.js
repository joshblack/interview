import question from '../dynamicArray';

describe('dynamicArray question', () => {
  const fixtures = [
    [
      `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`,
      `7
3`,
    ],
  ];

  fixtures.forEach(([input, expected], i) => {
    it(`should work for fixture ${i}`, () => {
      expect(question(input)).toEqual(expected);
    });
  });
});
