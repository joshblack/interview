/**
 * Write a function to check that a binary tree is a valid binary search
 * tree.
 *
 * Questions:
 *
 *   - What should the return type be?
 *   - What kind of format should we expect the tree to be in?
 */
import invariant from 'invariant';

export const bstChecker = (root) => {
  const { value } = root;

  function assert(root, condition) {
    if (!root) {
      return;
    }

    const { value, left, right } = root;

    condition(value);

    invariant(
      !left || value >= left.value,
      'Value on LHS is greater than root'
    );

    invariant(
      !right || value < right.value,
      'Value on RHS is less than root'
    );

    assert(left, (v) => {
      invariant(
        v <= value,
        'LHS child is greater than root node'
      );
    });

    assert(right, (v) => {
      invariant(
        v > value,
        'RHS child is less than root node'
      );
    });
  }

  assert(root.left, (v) => {
    invariant(
      v <= value,
      'LHS child is greater than root node'
    );
  });

  assert(root.right, (v) => {
    invariant(
      v > value,
      'RHS child is less than root node'
    );
  });

  return true;
};
