/* @flow */
import Node from './Node';
import BinaryTree from './BinaryTree';

export default class BinarySearchTree extends BinaryTree {
  root: Node;

  push(value: any): void {
    const node: Node<value> = new Node({ value });

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      // Node's should have a generic comparator here
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }

        current = current.right;
      }
    }

    this.__length = this.__length + 1;
  }
}
