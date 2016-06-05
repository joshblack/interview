/**
 * Write a multiplication function without using the multiplication operator,
 * instead use addition, subtraciton, and recursion.
 *
 * @squarespace
 */
const multiply = (a, b) => {
  if (b === 0) {
    return 0;
  }

  if (b < 0) {
    return -1 / (a + multiply(a, b + 1));
  }

  return a + multiply(a, b - 1);
};
