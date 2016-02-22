/* @flow */
import Node from './Node';

export default class BinaryTree {
  root: Node;
  __length: number;

  // $FlowFixMe - Computed keys are not supported
  [Symbol.iterator]() {
    return this.inOrder();
  }

  constructor(root: Node) {
    this.root = root;
  }

  // $FlowFixMe - get/set properties are not supported
  get length(): number {
    // Provide a mechanism for a class to set length on push for O(1) lookup
    if (this.__length) {
      return this.__length;
    }

    return this._length(this.root);
  }

  _length(node: ?Node): number {
    if (!node) {
      return 0;
    }

    return 1 + this._length(node.left) + this._length(node.right);
  }

  // $FlowFixMe - get/set properties are not supported
  get height(): number {
    return this._height(this.root);
  }

  _height(node: ?Node): number {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this._height(node.left), this._height(node.right));
  }

  * preOrder(node: ?Node): Iterator {
    if (node === undefined) {
      node = this.root;
    }

    if (!node) {
      return;
    }

    yield node.value;
    yield* this.preOrder(node.left);
    yield* this.preOrder(node.right);
  }

  * inOrder(node: ?Node): Iterator {
    if (node === undefined) {
      node = this.root;
    }

    if (!node) {
      return;
    }

    yield* this.inOrder(node.left);
    yield node.value;
    yield* this.inOrder(node.right);
  }

  * postOrder(node: ?Node): Iterator {
    if (node === undefined) {
      node = this.root;
    }

    if (!node) {
      return;
    }

    yield* this.postOrder(node.left);
    yield* this.postOrder(node.right);
    yield node.value;
  }
}
