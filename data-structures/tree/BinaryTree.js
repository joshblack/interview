/* @flow */

type Node<T> = {|
  left: ?Node<T>,
  right: ?Node<T>,
  data: T,
|};

const createNode<T> = ({
  left: ?Node<T> = null,
  right: ?Node<T> = null,
  data: T,
}) => ({
  left,
  right,
  data,
});

/**
 * Binary Tree
 *
 * Introduction: http://www.geeksforgeeks.org/binary-tree-set-1-introduction/
 */
export default class BinaryTree {
}
