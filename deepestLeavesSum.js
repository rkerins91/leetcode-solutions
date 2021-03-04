// Given a binary tree, return the sum of values of its deepest leaves.
// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

var deepestLeavesSum = function (root) {
  let sum = 0;
  let maxLevel = 1;

  function traverse(node, currLevel) {
    if (!node.left && !node.right) {
      if (currLevel === maxLevel) {
        sum += node.val;
      } else if (currLevel > maxLevel) {
        sum = node.val;
        maxLevel = currLevel;
      }
    }

    node.left && traverse(node.left, currLevel + 1);
    node.right && traverse(node.right, currLevel + 1);
  }
  traverse(root, 1);

  return sum;
};
