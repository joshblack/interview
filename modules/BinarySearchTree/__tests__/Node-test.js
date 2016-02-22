import Node from '../Node';

describe('#Node', () => {
  it('should be used as a constructor function', () => {
    const n = new Node({ value: 2 });

    expect(n.value).toBe(2);
    expect(n.left).toBeNull();
    expect(n.right).toBeNull();
  });

  it('should be able to include nodes as left or right values', () => {
    const n1 = new Node({ value: 1 });
    const n2 = new Node({ value: 2 });
    const n3 = new Node({ value: 3, left: n1, right: n2 });

    expect(n3.value).toBe(3);
    expect(n3.left).toEqual(n1);
    expect(n3.right).toEqual(n2);
  });
});
