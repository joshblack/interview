# Dynamic Programming Roadmap

1. Express the optimal value recursively
  - What are the local choices that we can make?
  - What subproblems are generated if we make a local choice?
  - What paramters define subproblems?
  - What are the trivial subproblems?
2. Have a "table" for subproblem solutions (recurrence)
3. ...
  - Write a memoized algorithm
  - Write a bottom-up, nested loop algorithm
    - In which order should the subproblems be solved?
4. Augment the algorithm to fill the table of choices (T)
5. Write an algorithm to traverse (T) constructing an optimal solution
