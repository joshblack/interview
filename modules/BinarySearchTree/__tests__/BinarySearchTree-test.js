import BinarySearchTree from '../BinarySearchTree';

describe('#BinarySearchTree', () => {
  it('should correctly insert values', () => {
    const tree = new BinarySearchTree();

    tree.push(8);
    tree.push(3);
    tree.push(10);
    tree.push(1);
    tree.push(6);
    tree.push(14);
    tree.push(4);
    tree.push(7);
    tree.push(13);

    const inOrder = [1, 3, 4, 6, 7, 8, 10, 13, 14];

    expect([...tree.inOrder()]).toEqual(inOrder);
    expect([...tree]).toEqual(inOrder);

    expect(tree.length).toBe(9);
    expect(tree.height).toBe(4);
  });
});
