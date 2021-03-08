
function commonChars(A: string[]): string[] {
  const hashMap: { [index: number]: number[]  } = {}
  A.forEach((str, idx) => {
    for (let i = 0; i < str.length; i++) {
      const c = str[i]
      if (!hashMap[c]) hashMap[c] = new Array(A.length).fill(0)
      hashMap[c][idx]++
    }
  })
  const ret: string[] = []
  for (const key in hashMap) {
    const count = Math.min(...hashMap[key])
    if (count > 0) {
      ret.push(...new Array(count).fill(key))
    }
  }
  return ret
}

export default commonChars