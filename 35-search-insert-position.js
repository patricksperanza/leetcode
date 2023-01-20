// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target < nums[0]) return 0
    if (target === nums[i]) {
      return i
    } else if (target > nums[i] && target < nums[i + 1]) {
      return i + 1
    } else if (target > nums[nums.length - 1]) {
      return nums.length
    }
  }
}
