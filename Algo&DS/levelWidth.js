/* Level Width
  Given the root node of a tree, return an array where each element is the width of the tree at each level.

  Example:
  Given:
      0
    / | \
  1   2   3
  |       |
  4       5
  Answer: [1, 3, 2]
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}

function levelWidth(root) {
  const arr = [root, "stop"];
  const count = [0];
  
  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "stop") {
      count.push(0);
      arr.push("stop");
    } else {
      arr.push(...node.children);
      count[count.length - 1] = count[count.length - 1] + 1;
    }
  }

  return count;
}