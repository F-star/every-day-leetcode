/** 
 * tag: Backtracking
 * src: https://leetcode.com/problems/combination-sum-ii/
 */
function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b)

  const hashMap = {} // 用于排除重复项
  const combines: number[][] = []

  function dfs(target: number, idx: number, combine: number[]) {
    if (target === 0) {
      const key = combine.join('-')
      if (!hashMap[key]) {
        combines.push(combine)
        hashMap[key] = true
      }
      return
    }
    if (idx > candidates.length - 1) return
    if (target < 0) return 

    dfs(target, idx + 1, combine) // 不将当前值加入进去
    dfs(target - candidates[idx], idx + 1, [...combine, candidates[idx]]) // 将当前值加入进去
  }
  dfs(target, 0, [])
  return combines
}