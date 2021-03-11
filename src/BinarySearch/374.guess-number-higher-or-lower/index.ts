/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */
// var guess = function(num: number): number {}

function guessNumber(n: number): number {
  let low = 1
  let high = n
  let mid: number
  while (true) { // 因为必然能找到，为提高效率，不使用 low <= high，
    mid = Math.floor((low + high) / 2)
    const ret = guess(mid)
    if (ret === -1) { // 目标在左侧
      high = mid - 1
    } else if (ret === 1) { // 目标在右侧
      low = mid + 1
    } else {
      return mid
    }
  }
}