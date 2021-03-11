
function fizzBuzz(n: number): string[] {
  const output: string[] = new Array(n)
  for (let i = 0; i < n; i++) {
    const is_x5 = (i + 1) % 5 === 0
    const is_x3 = (i + 1) % 3 === 0
    if (is_x5 && is_x3) {
      output[i] = 'FizzBuzz'
    } else if (is_x3) {
      output[i] = 'Fizz'
    } else if (is_x5) {
      output[i] = 'Buzz'
    } else {
      output[i] = String(i + 1)
    }
  }
  return output
}