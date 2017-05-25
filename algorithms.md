Data structures
  - A way to store and organize data in order to facilitate access and modifications. No single data structure works well for all purposes, and so it is important to know the strengths and limitations of several of them.

Efficient algorithms
  - Usual measure of efficiency is speed, i.e., how long an algorithm takes to produce its results.

Data structure examples:
  - var x = 10;
  - var nums = [10,10,11,12];
  - var obj = {
      name: "Aaron",
      age: 24
  }
- Structure where you store data


Binary Search Tree:
  - Root
  - Each node can have at most 2 children
  - Visit every node
    - Visit the node to the left first
      - If you can't traverse down the nodes anymore, print the value
      - And visit the right
