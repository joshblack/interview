/**
 * `BinaryTree` Reference Implementation.
 *
 * @author Josh Black
 * @flow
 */

type Tree = {
  contains(x: number): boolean;
  include(x: number): Tree;
};

const Empty: Tree = {
  contains(x: number): boolean {
    return false;
  },
  include(x: number): Tree {
  },
};

const NonEmpty: Tree = {
};

export default BinaryTree;
