/**
 * TODO: 二分查找法
 */

function isSubsequence(s: string, t: string): boolean {
  const hashMap: { [index: string]: number } = {}

  let low = 0
  let high = s.length - 1
  let mid: number
  for (let i = 0; i < s.length; i++) {
    const target = s[i]

    while (low <= high) {
      if (t[mid] === target) {
        break
      }
    }
  }
}

export default isSubsequence
