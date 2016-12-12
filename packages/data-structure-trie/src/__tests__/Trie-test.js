import Trie from '../';

let trie;

describe('Trie', () => {
  beforeEach(() => {
    trie = new Trie();
  });

  describe('#insert', () => {
    it('should correctly initialize with a single character', () => {
      trie.insert('a', 5);

      expect(trie.getRoot()).toMatchSnapshot();
    });

    it('should correctly share prefixes with multiple words', () => {
      trie.insert('a', 5);
      trie.insert('ab', 10);
      trie.insert('ac', 15);
      trie.insert('abc', 20);

      expect(trie.getRoot()).toMatchSnapshot();
    });
  });

  describe('#search', () => {
    beforeEach(() => {
      pairs.forEach(({ key, value }) => {
        trie.insert(key, value);
      });
    });

    it('should return a node given a key that exists', () => {
      const node = trie.search('amy');

      expect(node).toBeDefined();
      expect(node.value).toBe(56);
    });

    it('should return null for a key that doesn\'t exist', () => {
      expect(trie.search('dne')).toBe(null);
    });
  });

  describe('#startsWith', () => {
    beforeEach(() => {
      pairs.forEach(({ key, value }) => {
        trie.insert(key, value);
      });
    });

    it('should return a node that corresponds to the end of the prefix', () => {
      const node = trie.startsWith('a');

      expect(node).toBeDefined();
      expect(node).toMatchSnapshot();
    });

    it('should return null for a prefix that doesn\'t exist in the trie', () => {
      const node = trie.startsWith('nothing');

      expect(node).toBe(null);
    });
  });
});

const pairs = [
  {
    key: 'amy',
    value: 56,
  },
  {
    key: 'ann',
    value: 15,
  },
  {
    key: 'emma',
    value: 30,
  },
  {
    key: 'rob',
    value: 27,
  },
  {
    key: 'roger',
    value: 52,
  },
];

