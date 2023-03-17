// You are given an integer n.

// Each number from 1 to n is grouped according to the sum of its digits.

// Return the number of groups that have the largest size.

// Example 1:

// Input: n = 13
// Output: 4
// Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
// [1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
// There are 4 groups with largest size.

const countLargestGroup = function (n) {
  const groups = {}
  for (let i = 1; i <= n; i++) {
    const sum = String(i)
      .split("")
      .reduce((acc, c) => acc + Number(c), 0)
    groups[sum] = (groups[sum] || 0) + 1
  }
  const largestSize = Math.max(...Object.values(groups))
  return Object.values(groups).filter((size) => size === largestSize).length
}
