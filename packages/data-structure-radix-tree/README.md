# `data-structure-radix-tree`

## Usage

Currently this project isn't being published to the public `npm` registry, but you can develop locally using it by modifying the project itself and running `npm test`. You can also create additional packages and add `data-structure-radix-tree` in the `package.json` of that package and run `npm run lerna -- bootstrap` to bring that as a dependency to the new project.

## ADT

Radix trees support the following operations:

- Insert: adds a new string to the trie while trying to minimize the amount of data stored.
- Delete: removes a string from the trie.
- Search: includes exact lookup, find predecessor, find successor, find all strings with prefix.

All operations are `O(k)` where `k` is the maximum length of all strings in the set, where length is measured in the quantity of bits equal to the radix of the radix trie.

## Developing

For development, feel free to modify the implementation or its corresponding tests. To run tests, just run `npm test` in the root directory. You can also run `Flow` for type-checking by running `npm run typecheck`.

