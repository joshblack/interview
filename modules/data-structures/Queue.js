/**
 * Queue using a two stack implementation for constant time queue, enqueue, and
 * top operations. Tradeoff is that the cost to remove is O(n)
 */
class Queue {
  constructor() {
    this._pushStack = [];
    this._popStack = [];
  }

  get length() {
    return this._pushStack.length + this._popStack.length;
  }

  push(...elements) {
    this._pushStack.push(...elements);
  }

  pop() {
    if (this.length === 0) {
      console.log('Nothing to pop!');
      return;
    }

    return this._popStack.pop();
  }

  remove(element) {
    let stack = this._popStack;
    let index = stack.indexOf(element);

    if (index === -1) {
      stack = this._pushStack;
      index = this._pushStack.indexOf(element);
    }

    if (index !== -1) {
      stack.splice(index, 1);
    }
  }

  get top() {
    if (this.length === 0) {
      console.log('Empty Queue!');
      return;
    }

    if (this._popStack.length === 0) {
      this._popStack = this._pushStack.reverse();
      this._pushStack = [];
    }

    return this._popStack[this._popStack.length - 1];
  }
}
