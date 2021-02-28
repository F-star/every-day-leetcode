/**
 * https://leetcode.com/problems/summary-ranges/
 */

function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return []
  if (nums.length === 1) {
    return [String(nums[0])]
  }

  const strs: string[] = []
  let headNum: number = nums[0]
  let prevNum: number = nums[0]
  let num: number
  for (let i = 1; i < nums.length; i++) {
    num = nums[i]
    if (num - prevNum !== 1) {
      if (headNum === prevNum) {
        strs.push(String(headNum))
      } else {
        strs.push(headNum + '->' + prevNum)
      }
      headNum = num
    }
    prevNum = num
  }
  
  // 处理尾巴
  if (headNum === prevNum) {
    strs.push(String(headNum))
  } else {
    strs.push(headNum + '->' + prevNum)
  }
  
  return strs
};

export default summaryRanges