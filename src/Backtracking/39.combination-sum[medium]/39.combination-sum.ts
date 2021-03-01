/**
 * tags: Array, Backtracking
 * src: https://leetcode.com/problems/combination-sum/
 */

function combinationSum(candidates: number[], target: number): number[][] {
  // 回溯法，每次都抉择：是否跳过当前值
  const rets: number[][] = []
  dfs(candidates, target, rets, [], 0)
  return rets
};

function dfs(
  candidates: number[], target: number, rets: number[][],
  combinations: number[], idx: number
) {
  if (target < 0 || idx > candidates.length - 1) return
  if (target === 0) {
    rets.push(combinations)
    return
  }

  // 跳过，不用第 idx 个数
  dfs(candidates, target, rets, combinations, idx + 1) 
  // 不跳过，用第 idx 个数
  dfs(candidates, target - candidates[idx], rets, [...combinations, candidates[idx]], idx)
}