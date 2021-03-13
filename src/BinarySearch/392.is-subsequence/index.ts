/**
 * 贪婪算法
 * 遍历，时间复杂度 O(n)
 */

function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true
  if (s.length > t.length) return false

  let si = 0 // s 的指针
  for (let ti = 0; ti < t.length; ti++) { // 遍历 t
    if (t[ti] === s[si]) { // 发现一个匹配，s 的指针右移
      si++
      if (si === s.length) {
        return true
      }
    }
  }
  return false
}

export default isSubsequence