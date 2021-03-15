/**
 * 递归法
 * 找出 garyCode(n) 与 gradCode(n - 1) 的规律
 */

function grayCode(n: number): number[] {
  if (n === 1) return [0, 1]

  const prevGrayCode = grayCode(n - 1)
  const currGrayCode = new Array(prevGrayCode.length * 2)
  for (let i = 0; i < prevGrayCode.length; i++) {
    currGrayCode[i] = prevGrayCode[i] // 加前导零
  }

  const addedVal = (1 << (n - 1))
  for (let i = currGrayCode.length - 1, j = 0; i >= prevGrayCode.length; i--, j++) {
    currGrayCode[i] = prevGrayCode[j] + addedVal  // 数组倒序，并加前导 1
  }
  return currGrayCode
}