
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  function dfs(node: TreeNode | null, leaves: Array<number>) {
    if (node === null) return
    if (node.left === null && node.right === null) {
      leaves.push(node.val)
      return
    }
    dfs(node.left, leaves)
    dfs(node.right, leaves)
  }

  const leaves1: Array<number> = []
  const leaves2: Array<number> = []
  dfs(root1, leaves1)
  dfs(root2, leaves2)
  if (leaves1.length !== leaves2.length) return false
  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] !== leaves2[i]) return false
  }
  return true
};

export default leafSimilar

/**
 * 最好的方法是，一棵树每找到一个叶子节点时，另一棵树也找一叶子节点来比较。
 * 我想到深度遍历里加，但终究写不出来。于是只要用两个数组找到并保存两棵树的叶子节点，在最后再比较。
 * 因为无法提前结束，所以效率很低。时间复杂度为 O(m + n) m 和 n 分别为两棵树的节点数。
 * 
 * 然后我发现一个实现了 “提前发现不同并退出思路“ 的答案：
 * https://leetcode.com/problems/leaf-similar-trees/discuss/152329/C%2B%2BJavaPython-O(H)-Space
 * 思路是：使用栈来记录一棵树遇到过的节点，并在发现一个叶子节点时返回该叶子节点。此时，再递归另一个树返回。
 */