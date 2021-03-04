/**
 * src: https://leetcode.com/problems/combinations/
 */
function combine(n: number, k: number): number[][] {
  const combs: number[][] = []
  function dfs(remain: number, comb: number[], cur: number) {
    if (n - cur + 1 < remain) { // 剪枝
      return
    }
    if (remain === 0) {
      combs.push(comb)
      return
    }

    dfs(remain, comb, cur + 1) // 跳过
    dfs(remain - 1, [...comb, cur], cur + 1) // 选当前值
  }
  dfs(k, [], 1)
  return combs
};