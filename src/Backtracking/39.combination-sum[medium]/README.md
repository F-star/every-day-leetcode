
经典回溯题。

## 回溯的理解

回溯的核心是找到岔路口。通常在岔路口会有两个抉择，我们会使用深度优先搜素（DFS）选择一条路，等发现走不通了，就倒退回来走两一条路。某种意义上可以说是一种

本质并不难理解，难点在于根据题意写出 dfs 函数，如何传入不同的参数组合，来表示走向不通的道路。LeetCode 上的回溯题基本都是 medium 难度往上，由此也可以看出回溯并不简单。

回溯需要注意的一些点：

- 找出结束条件；
- 如果要返回一个二维数组，注意在必要的地方做数组拷贝；
- 分析是否可以使用剪枝

## 思路

解决回溯问题的核心在于写出递归函数。而写出递归函数的关键在于，写出选择道路对应的正确的参数组合。




