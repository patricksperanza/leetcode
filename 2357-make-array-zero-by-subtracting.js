// You are given a non-negative integer array nums. In one operation, you must:

// Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
// Subtract x from every positive element in nums.
// Return the minimum number of operations to make every element in nums equal to 0.

// Example 1:

// Input: nums = [1,5,0,3,5]
// Output: 3
// Explanation:
// In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
// In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
// In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
function minimumOperations(nums) {
  let count = 0
  while (!nums.every((num) => num === 0)) {
    let min = findMin(nums)
    nums = nums.map((num) => {
      if (num !== 0) {
        return (num -= min)
      } else {
        return num
      }
    })
    count++
  }
  return count
}

function findMin(arr) {
  let min = 0
  arr.forEach((num) => {
    if (min === 0 && num > 0) min = num
    if (num > 0 && num < min) min = num
  })
  return min
}
