/**
 * `Heap` Reference Implementation.
 *
 * @author Josh Black
 * @flow
 */

/**
 * `max_heapify(A: Array, i: number)`
 *
 * Assume that the trees rooted at left(i) and right(i) are max heaps.
 */

const half = (number) => Math.floor(number / 2);

export default class Heap {
  _heap: Array<number>;
  size: number;

  constructor(heap: Array<number>) {
    const size = heap.length;

    this.size = size;
    this._heap = [null].concat(heap);

    for (let i = half(size); i >= 1; i--) {
      this.heapify(i);
    }
  }

  heap(): Array<number> {
    return this._heap;
  }

  heapify(index: number): void {
    // Get the left and right child nodes indices in our array
    const left = index * 2;
    const right = (index * 2) + 1;

    // Access the root of the subtree, and the left and right elements
    const root = this._heap[index];
    const leftElement = this._heap[left];
    const rightElement = this._heap[right];

    if (leftElement > rightElement && leftElement > root) {
      this._heap[index] = leftElement;
      this._heap[left] = root;
    } else if (rightElement > leftElement && rightElement > root) {
      this._heap[index] = rightElement;
      this._heap[right] = root;
    }
  }

  size(): number {
    return this.size;
  }

  toString(): string {
    return '1';
  }
}
