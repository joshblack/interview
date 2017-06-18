# `data-structure-heap`

> An array visualized as a nearly complete binary tree

```
1 2 3 4 5 6 7 8 9 10
[ | | | | | | | | | ]

                1
            /       \
        2               3
      /   \           /   \
    4       5        6     7
   / \     /
  8   9   10
```

Properties of Heap as a Tree:

- The root of the tree is the first element (`i === 1`).
- `parent(i)` is `i / 2`
- `left(i)` is `2i`
- `right(i)` is `2i + 1`

Variants:

- Max Heap
  - The key of a node is `>=` the keys of its children
- Min Heap
  - The key of a node is `<=` the keys of its children

Operations:

> Implements a set `S` of elements, each of these elements is associated with a key.

- `insert(S, x)`: insert element `x` into set `S`
- `max(S)`: return element of `S` with the largest `key`
- `extract_max(S)`: returns element of `S` with the largest `key` and then removes element from `S`
- `increase_key(S, x, k)`: increase the value of `x`'s `key` to the new value, `k`
- `build_max-heap`: produces a max heap from an unordered array
- `max_heapify`: correct a single violation of the heap property in a subtree's root
- `heap_size(A)`

Aliases: `Priority Queue`

Resources:

- [Heaps and Heap Sort](https://www.youtube.com/watch?v=B7hVxCmfPtM&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=4)

## Usage

Currently this project isn't being published to the public `npm` registry, but you can develop locally using it by modifying the project itself and running `npm test`. You can also create additional packages and add `data-structure-heap` in the `package.json` of that package and run `npm run lerna -- bootstrap` to bring that as a dependency to the new project.

## Developing

For development, feel free to modify the implementation or its corresponding tests. To run tests, just run `npm test` in the root directory. You can also run `Flow` for type-checking by running `npm run typecheck`.

