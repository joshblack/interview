import { dfs } from './depthFirstSearch';
import { getVertices } from '../../data-structures/ImmutableGraph';

const remove = (array, element) => {
  const copy = array.slice();
  const index = copy.indexOf(element);

  copy.splice(index, 1);

  return copy;
};

const last = (array) => array[array.length - 1];

export const hasCycle = (graph) => {
  let white = getVertices(graph).toJS();
  let grey = [];
  let black = [];
  let result;

  dfs(graph, (value, key, visited) => {
    if (result) {
      return;
    }

    if (black.includes(key)) {
      return;
    }

    if (visited) {
      if (last(grey) === key) {
        grey.pop();
        black.push(key);
      } else {
        result = grey;
      }
    } else {
      grey.push(key);
    }
  });

  return result;
};
