/**
 * 三重多重循环解法
 */

function restoreIpAddresses(s: string): string[] {
  function checkIPBlock(block: string): boolean {
    if (block.length === 0) return false
    if (block[0] === '0' && block.length > 1) return false
    return Number(block) <= 255
  }

  const ips: string[] = []
  const ip: string[] = []
  let b: string // ip 块
  for (let i = 1; i <= 3; i++) {
    b = s.slice(0, i)
    if (!checkIPBlock(b)) { // 校验 ip 块是否符合 0~255，提前判断（剪枝）
      continue
    }
    ip.push(s.slice(0, i))
    for (let j = i + 1; j <= i + 3; j++) {
      b = s.slice(i, j)
      if (!checkIPBlock(b)) {
        ip.pop()
        continue
      }
      ip.push(b)
      for (let k = j + 1; k <= j + 3; k++) {
        b = s.slice(j, k)
        if (!checkIPBlock(b)) {
          continue
        }
        ip.push(b)

        b = s.slice(k)
        if (!checkIPBlock(b)) {
          ip.pop()
          continue
        }
        ip.push(b)
        ips.push(ip.join('.'))
        // pop 都是复原数组
        ip.pop()
        ip.pop()
      }
      ip.pop()
    }
    ip.pop()
  }
  return ips
}