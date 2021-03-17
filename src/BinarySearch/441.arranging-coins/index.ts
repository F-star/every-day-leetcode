/**
 * 从前往后遍历
 */

function arrangeCoins(n: number): number {
  let i = 1
  let total = 0
  while(true) {
    total = total + i
    if (total > n) return i - 1
    i++
  }
}