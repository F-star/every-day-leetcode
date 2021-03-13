/**
 * TODO: 回溯法
 */

function restoreIpAddresses(s: string): string[] {
  const validIPs: string[] = []
  function dfs(pos: number[], curr: number) {
    if (curr > s.length - 1) return
    if (pos.length === 3) {
      console.log(pos)
      // 先判断最后的 ip 段是否合法
      const ip3 = s.slice(pos[2])
      if (ip3.length > 3) return // 长度不符 

      const ip2 = s.slice(pos[1], pos[2])
      if (Number(ip2) > 255) return

      const ip1 = s.slice(pos[0], pos[1])
      if (Number(ip1) > 255) return

      const ip0 = s.slice(pos[0])
      if (Number(ip0) > 255) return

      validIPs.push([ip0, ip1, ip2, ip3].join('.'))
      return
    }

    pos.push(curr)
    dfs([...pos], curr + 1)
    dfs([...pos], curr + 2)
    dfs([...pos], curr + 3)
  }

  dfs([], 1)
  return validIPs
}

restoreIpAddresses("25525511135")