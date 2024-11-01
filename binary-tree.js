/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */
  minDepth() {
    if (!this.root) return 0;

    let depth = 0;
    let queue = [this.root];

    while (queue.length) {
      depth++;
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let current = queue.shift();
        if (!current.left && !current.right) {
          return depth;
        }
        if (current.left) {
          queue.push(current.left);
        }

        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    return depth;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let depth = 0;
    let queue = [this.root];

    while (queue.length) {
      depth++;
      let size = queue.length;

      for (let i = 0; i < size; i++) {
        let current = queue.shift();

        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
    return depth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum(start = this.root) {
    if (!start) return 0;

    let max = 0;
    let stack = [start];
    let sums = [0];

    while (stack.length) {
      let current = stack.pop();
      let currSum = sums.pop();

      currSum += current.val;

      max = Math.max(max, currSum);

      if (current.left) {
        stack.push(current.left);
        sums.push(currSum);
      }
      if (current.right) {
        stack.push(current.right);
        sums.push(currSum);
      }
    }
    return max;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return 0;

    let stack = [this.root];
    let smallestLarger = null;

    while (stack.length) {
      let current = stack.pop();

      if (current.val > lowerBound) {
        if (smallestLarger === null || current.val < smallestLarger) {
          smallestLarger = current.val;
        }
      }

      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
    return smallestLarger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

// module.exports = { BinaryTree, BinaryTreeNode };
