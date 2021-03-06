
function numberOfMatches(n: number): number {
  let total = 0
  let luckyTeams: number
  let currMatchCount: number
  while(n !== 1) {
    luckyTeams = n % 2
    currMatchCount = Math.floor(n / 2)
    total += currMatchCount
    n = currMatchCount + luckyTeams
  }
  return total
};

/**
 * 网上的最优解：return n - 1
 * 这是从失败者的角度考虑，一旦一个队伍失败，它就会被淘汰，冠军只要一个，则 n 支队伍要比赛 n - 1 次淘汰 n - 1 支队伍。
 * 才能留下最后一支冠军队伍。
 */