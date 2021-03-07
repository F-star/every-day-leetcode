
function exist(board: string[][], word: string): boolean {
  const w = board[0].length
  const h = board.length
  if (w * h < word.length) return false

  let found = false
  const visited: boolean[][] = new Array(h)
  for (let i = 0; i < h; i++) {
    visited[i] = new Array(w).fill(false) 
  }

  function dfs(i: number, j: number, idx: number) {
    if (found) return // 一旦找到，其他道路停止尝试。
    if (idx === word.length) { // 找到
      found = true
      return
    }
    if (i > board.length - 1 || i < 0) return // 垂直方向越界
    if (j > board[0].length - 1 || j < 0) return // 水平方向越界
    if (visited[i][j] === true) return // 已经是道路的一部分了

    if (board[i][j] !== word[idx]) return // 不匹配（此路不通）

    visited[i][j] = true
    dfs(i - 1, j, idx + 1) // 向上
    dfs(i, j + 1, idx + 1) // 向右
    dfs(i + 1, j, idx + 1) // 向下
    dfs(i, j - 1, idx + 1) // 向左
    visited[i][j] = false
  }

  for (let j = 0; j < board[0].length; j++) {
    if (found) break
    for (let i = 0; i < board.length; i++) {
      if (found) break
      dfs(i, j, 0)
    }
  }
  return found
}

export default exist