function findClosestElements(arr: number[], k: number, x: number): number[] {
  if (x <= arr[0]) return arr.slice(0, k)
  if (x >= arr[arr.length - 1]) return arr.slice(arr.length - k)

  let low = 0
  let high = arr.length - 1
  let mid: number
  while(low <= high) {
    mid = Math.floor((low + high) / 2)
    if (arr[mid] > x) {
      high = mid - 1
    } else if (arr[mid] < x) {
      low = mid + 1
    } else {
      break
    }
  }

  // 双指针找值。
  let l: number // 向左的指针
  let r: number // 向右的指针
  if (arr[mid] >= x) {
    r = mid
    l = mid - 1
  } else {
    l = mid
    r = mid + 1
  }

  // TODO: 优化点，不使用数组，只记录 l 和 r，计算完后，直接从 arr 中截取出来。
  const els = new Array(k)
  for (let i = 0; i < k; i++) {
    if (l < 0) {
      els[i] = arr[r++]
    } else if (r >= arr.length) {
      els[i] = arr[l--]
    } else {
      if ((x - arr[l]) <= (arr[r] - x)) { // 左指针的差值更小
        els[i] = arr[l--]
      } else {
        els[i] = arr[r++]
      }
    }
  }

  return els.sort((a, b) => a - b)
}