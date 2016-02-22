import Node from '../Node';
import BinaryTree from '../BinaryTree';

describe('#BinaryTree', () => {
  it('should take in a Node as a root node', () => {
    const node = new Node({ value: 0 });
    const tree = new BinaryTree(node);

    expect(tree.root).toEqual(node);
  });

  it('should support pre-order, in-order, and post-order traversal', () => {
    const left = new Node({ value: 1 });
    const right = new Node({ value: 2 });
    const root = new Node({ value: 0, left, right });
    const tree = new BinaryTree(root);

    expect([...tree.preOrder()]).toEqual([0, 1, 2]);
    expect([...tree.inOrder()]).toEqual([1, 0, 2]);
    expect([...tree.postOrder()]).toEqual([1, 2, 0]);
  });

  it('should support getting length and height of a tree', () => {
    const left = new Node({ value: 1 });
    const right = new Node({ value: 2 });
    const root = new Node({ value: 0, left, right });

    const tree = new BinaryTree(root);
    expect(tree.length).toBe(3);
    expect(tree.height).toBe(2);
  });
});
