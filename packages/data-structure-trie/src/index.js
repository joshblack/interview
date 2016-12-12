/**
 * `Trie` Reference Implementation.
 *
 * @author Josh Black
 * @flow
 */
type TrieNode<T> = {
  children: {
    [key: String]: TrieNode<T>;
  };
  value?: ?T;
};

export default class Trie<T> {
  _root: TrieNode<T>;

  constructor() {
    this._root = {
      children: {},
    };
  }

  getRoot(): TrieNode<T> {
    return this._root;
  }

  insert(string: String, value: ?T): TrieNode<T> {
    let level = this._root;

    for (let i = 0, len = string.length; i < len; i++) {
      // $FlowFixMe: Iterators
      const character = string[i];
      const children = level.children;

      if (!children[character]) {
        children[character] = {
          children: {},
        };
      }

      level = children[character];
    }

    level.value = value;

    return level;
  }

  search(key: String): TrieNode<T> | null {
    let level = this._root;

    for (let i = 0, len = key.length; i < len; i++) {
      // $FlowFixMe: Iterators
      const character = key[i];

      if (!level.children[character]) {
        return null;
      }

      level = level.children[character];
    }

    return level;
  }

  startsWith(prefix: String): TrieNode<T> | null {
    let level = this._root;

    for (let i = 0, len = prefix.length; i < len; i++) {
      // $FlowFixMe: Iterators
      const character = prefix[i];

      if (!level.children[character]) {
        return null;
      }

      level = level.children[character];
    }

    return level;
  }
}
