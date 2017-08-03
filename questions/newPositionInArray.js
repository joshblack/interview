/**
 * Given an input array and another array that describes a new index for each
 * element, mutate the input array so that each element ends up in their new
 * index.
 *
 * Discuss the runtime of the algorithm, and how you can be sure there won't be
 * any infinite loops.
 *
 * Background:
 *
 * This is a classic variant of an in-place shuffle algorithm. Typically,
 * in-place algorithms operate directly on their input and change them
 * accordingly in O(1) space (ie we don't allocate any additional arrays).
 *
 * Working in-place has a number of advantages, namely to save space. However,
 * working in-place causes side-effects in our work so it's important to be
 * cautious of how and why you're using these kinds of algorithms.
 *
 * It's important to realize that you can probably solve these types of
 * problems with O(n^2) based solutions, but what we're ideally aiming for is
 * solving these problems in linear (O(n)) time.
 *
 * Resources to learn more:
 *   - Interview Cake: https://www.interviewcake.com/question/javascript/shuffle
 *
 * @facebook
 * @flow
 */
import invariant from 'invariant';

const swap = (array, from, to) => {
  const temp = array[from];

  array[to] = array[from];
  array[from] = temp;
};

export const positionNewArray = (
  originalArray: Array<any>,
  nextPositions: Array<number>,
): void => {
  invariant(
    originalArray.length === nextPositions.length,
    'The two arrays should have the same length',
  );

  invariant(
    nextPositions.every(position => position < originalArray.length),
    'Invalid position index found in the nextPositions array. Expected ' +
      'each index to be less than %s.',
    originalArray.length,
  );

  invariant(
    new Set(nextPositions).size === nextPositions.length,
    'There are one or more duplicate indices in the nextPositions array',
  );

  for (let i = 0; i < originalArray.length; i++) {
    let x = originalArray[i];
    let j = i;

    while (true) {
      let k = nextPositions[j];
      nextPositions[j] = j;

      if (k === i) {
        break;
      }

      originalArray[j] = originalArray[k];
      j = k;
    }

    originalArray[j] = x;
  }
};
