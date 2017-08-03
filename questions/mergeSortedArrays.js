/**
 * In order to win the prize from most cookies sold, my friend Alice and I
 * are going to merge our Girl Scout Cookie orders and enter as one unit.
 *
 * Each order is represented by an "order id", an integer.
 *
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a function to merge our arrays of orders into one sorted array.
 *
 * Questions:
 *
 *   - Are we guaranteed to have arrays that contain all numbers
 *   - Should we consider arrays that have 0 elements
 *   - Should we consider the inputs guarded
 *
 * Things to consider:
 *
 *   - Arrays of varying lengths
 *   - Duplicates/identical
 *
 * The important distinction in this problem is that the arrays are
 * already sorted!
 */
import invariant from 'invariant';

// Recursive solution
export const mergeSortedArraysRecursive = (a, b) => {
  invariant(
    Array.isArray(a) && Array.isArray(b),
    'Expected both inputs to be an instance of `Array`.',
  );

  if (a.length === 0 && b.length !== 0) {
    return b;
  } else if (b.length === 0 && a.length !== 0) {
    return a;
  } else if (b.length === 0 && a.length === 0) {
    return [];
  }

  const headA = a[0];
  const headB = b[0];

  if (headA <= headB) {
    return [headA, ...mergeSortedArraysRecursive(a.slice(1), b)];
  }

  return [headB, ...mergeSortedArraysRecursive(a, b.slice(1))];
};

// Iterative solution
export const mergeSortedArrays = (a, b) => {
  invariant(
    Array.isArray(a) && Array.isArray(b),
    'Expected both inputs to be an instance of `Array`.',
  );

  const length = a.length + b.length;
  const result = Array(length);

  let indexA = 0;
  let indexB = 0;
  let indexResult = 0;

  while (indexResult < length) {
    if (indexA >= a.length) {
      result[indexResult] = b[indexB];

      indexB++;
    } else if (indexB >= b.length) {
      result[indexResult] = a[indexA];

      indexA++;
    } else {
      if (a[indexA] <= b[indexB]) {
        result[indexResult] = a[indexA];

        indexA++;
      } else {
        result[indexResult] = b[indexB];

        indexB++;
      }
    }

    indexResult++;
  }

  return result;
};
