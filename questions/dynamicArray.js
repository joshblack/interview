/* @flow */

/**
 * Problem:
 * https://www.hackerrank.com/challenges/dynamic-array
 */

const parseInput = input => {
  const instructions = input.split('\n');
  const [N, Q] = instructions[0].split(' ').map(Number);
  const queries = instructions
    .slice(1)
    .map(query => query.split(' ').map(Number));

  return {
    N,
    Q,
    queries,
  };
};

const fillArray = (size: number): Array<Array<*>> => {
  const array = new Array(size);

  for (let i = 0; i < size; i++) {
    array[i] = [];
  }

  return array;
};

type QueryOperation = ({
  seq: Array<number>,
  x: number,
  y: number,
}) => {
  seq?: Array<number>,
  lastAnswer?: number,
};

type QueryOpCodes = Map<number, QueryOperation>;

const queryOpCodes: QueryOpCodes = new Map([
  [
    1,
    ({seq, y}) => ({
      seq: seq.slice(0).concat(y),
    }),
  ],
  [
    2,
    ({seq, y}) => ({
      lastAnswer: seq[y % seq.length],
    }),
  ],
]);

const findSequence = (N, x, lastAnswer) => (x ^ lastAnswer) % N;

const dynamicArray = (input: string): string | Array<Error> => {
  const {N, queries} = parseInput(input);
  const seqList = fillArray(N);
  let lastAnswer = 0;

  const output = queries.reduce((acc, query) => {
    const [code, x, y] = query;
    const op = queryOpCodes.get(code);
    const index = findSequence(N, x, lastAnswer);
    const seq = seqList[index];

    if (op) {
      const {seq: nextSeq, lastAnswer: nextLastAnswer} = op({seq, x, y});

      if (nextSeq) {
        seqList[index] = nextSeq;
        return acc;
      }

      if (nextLastAnswer !== undefined) {
        lastAnswer = nextLastAnswer;
        return acc.concat(lastAnswer);
      }
    }

    return acc;
  }, []);

  return output.join('\n');
};

export default dynamicArray;
