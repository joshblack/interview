/**
 * Generic Node interface for use with various Tree implementations
 *
 * @flow
 */
type NodeConfig<X> = {
  value: X,
  left?: Node,
  right?: Node
};

export default class Node<X> {
  value: X;
  left: ?Node | null;
  right: ?Node | null;

  constructor(config: NodeConfig<X>): void {
    const { value, left = null, right = null } = config;

    this.value = value;
    this.left = left;
    this.right = right;
  }
}
