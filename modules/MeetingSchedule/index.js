/**
 * You're building a calendar tool to help your colleagues see the times in a
 * day when everyone is available.
 *
 * The API your working with gives you 2 element arrays to describe the start
 * and end of meetings throughout the day.
 *
 * An array will have 2 integer values, for example: [1, 2], where each integer
 * represents the number of 30min blocks past 9:00am.
 *
 * What we need to do is write a function that takes in an array of these
 * meeting times and return an array of condensed ranges.
 *
 * For example:
 *
 * Input:
 * [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * Ouput:
 * [[0, 1], [3, 8], [9, 12]]
 *
 * Questions to ask:
 *
 * - Is the input sorted?
 * - Are we guaranteed a start and an end value?
 * - Is the input an array of size >= 1?
 */

// Check to see if meeting a overlaps with meeting b
const intersect = (a, b) => {
  if (a[1] >= b[0]) {
    return [[a[0], b[1]]];
  }

  return [a, b];
};

/**
 * Solution:
 * O(n log(n)) and O(n) space
 */
export const condenseMeetingTimes = (meetings) => {
  // Sort all of our meetings initially
  const orderedMeetings = meetings.sort(([a], [b]) => a - b);

  return orderedMeetings.reduce((meetings, meeting, i) => {
    if (i === 0) {
      return [meeting];
    }

    const last = meetings.pop();

    return [
      ...meetings,
      ...intersect(last, meeting)
    ];
  }, []);
};
