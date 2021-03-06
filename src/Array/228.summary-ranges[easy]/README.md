
# 228. Summary Ranges

来源：https://leetcode.com/problems/summary-ranges/

## 实现思路

### 解法1：依次遍历数组

用 headNum 记录一段连续整数的开头，遍历的时候记录当前值 num，并保留上次（即上一个元素）的值为 prevNum。用 strs 的字符串数组来保存要返回的值。一旦发现当前元素不等于上一个元素的值 + 1，就组合 headNum 和 provNum（这里要判断它们之间的数字的长度），添加到 strs 数组中。添加完后，**千万要记得做重制操作**：将 headNum 设置为当前值（即 num）。

因为数组长度为 0 和 1 的情况不好加入到上述逻辑，所以提前判断处理。

另外需要注意的点：**处理结尾**。因为到达数组末尾处，无法触发添加到 strs，所以遍历结束后，需要手动触发添加逻辑。

时间复杂度：O(n)

### 解法2：二分法（TODO）

经群里字节大佬提醒，发现最优解应该是二分法。这里有一个经验之谈：

**如果题目是一个有序数组，请先考虑着能否使用二分法来解。**

（待实现）

时间复杂度：O(logn)