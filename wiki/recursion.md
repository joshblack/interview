# Recursion

Utilizing recursion incurs a memory cost associated with the size of the call stack. As a result, if our algorithm is top-down, for example:

```js
const product = (n) => n > 1 ? (n * product(n - 1)) : 1;
```

Then we build up a call stack of size `O(n)`, making our total memory cost of `O(n)`. Ultimately this results in bad performance.

## Bottom-up

We can flip a recursive algorithm and instead go bottom-up, allowing us to save ourselves from the memory cost that recursion incurs when it builds up the call stack. Bottom-up allows us to start from the beginning, building up on itself rather than breaking down. 

A bottom-up example of the above formula might be:

```js
const product = (n) => {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
};
```

Bottom-up is a common strategy for dynamic programming problems, alternatively we can look into memoization.

## Tail call optimization (TCO)

In ES2015, we'll get proper TCO. This means that we no longer have to worry about the call stack cost for certain functions that align with what TCO supports.
