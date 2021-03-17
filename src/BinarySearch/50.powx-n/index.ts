function myPow(x: number, n: number): number {
  if (n < 0) {
    return 1 / myPow(x, -n)
  }
  if (n === 0) return 1

  const extraVal = n % 2 === 0 ? 1 : x // 是否需要补 x，奇数需要补 x
  n = Math.floor(n / 2)
  const val = myPow(x, n)
  return val * val * extraVal
}