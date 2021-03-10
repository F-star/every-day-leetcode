
function fairCandySwap(A: number[], B: number[]): number[] {
  const hashMap: { [index: number]: true } = {}
  const totalA = A.reduce((prev, curr) => prev + curr)
  const totalB = B.reduce((prev, curr) => {
    hashMap[curr] = true
    return prev + curr
  }, 0)

  const delta = (totalA - totalB) / 2
  for (const val of A) {
    const valB = val - delta
    if (hashMap[valB]) {
      return [val, valB]
    }
  }
};

export default fairCandySwap

/**
 * 找出关系式：totalA - a + b = totalB - b + a   (a, b 为返回数组的依次两项)
 * 化简：b = a - (totalA - totalB) / 2
 */