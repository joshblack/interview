import question from '../hourglassSum';

describe('hourglassSum question', () => {
  const fixtures = [
    [
      [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ],
      19,
    ],
  ];

  fixtures.forEach(([input, expected], i) => {
    it(`should work for fixture ${i}`, () => {
      expect(question(input)).toEqual(expected);
    });
  });
});
