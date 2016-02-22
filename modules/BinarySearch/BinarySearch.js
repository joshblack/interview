/**
 * A binary search algorithm finds an item in a _sorted_ set in O(log n) time.
 *
 * We can compare this to a brute force approach, where we would take O(n)
 * time traversing the entire set, in the worst case.
 *
 * Instead, we can do less work by:
 *
 * 1. Starting with the middle number in the sorted set, asking is our target
 *    number bigger or smaller?
 * 2. We can "rule out" half of the set by answering the above question
 * 3. Repeat the approach on the half set
 *
 * We can do this iteratively, or recursively.
 *
 * @flow
 */
export const BinarySearchIterative = (
  target: number,
  set: Array<number>
): number | Error => {
  let startPosition: number = 0;
  let endPosition: number = set.length - 1;
  let index: number = -1;

  // Keep searching until we run out of guesses
  while (startPosition + 1 <= endPosition) {
    const midPoint = Math.floor((endPosition - startPosition) / 2);
    const midPointValue = set[midPoint];

    if (midPointValue === target) {
      index = midPoint;
      break;
    } else if (midPointValue > target) {
      endPosition = midPoint;
    } else if (midPointValue < target) {
      startPosition = midPoint;
    }
  }

  if (index === -1) {
    return new Error(`Target: ${target} could not be found in set: ${set}`);
  }

  return index;
};

/**
 * Recursive implementation of Binary Search.
 */
export const BinarySearchRecursive = (
  target: number,
  set: Array<number>,
  start: number = 0,
  end: number = set.length - 1
): number => {
  const midPoint: number = Math.floor((end + start) / 2);
  const midPointValue: number = set[midPoint];

  if (target === midPointValue) {
    return midPoint;
  }

  if (target > midPointValue) {
    return BinarySearchRecursive(
      target,
      set,
      midPoint + 1,
      end
    );
  }

  if (target < midPointValue) {
    return BinarySearchRecursive(
      target,
      set,
      start,
      midPoint - 1
    );
  }

  throw new Error(`Target: ${target} could not be found in set: ${set}`);
};
