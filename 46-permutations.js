// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

const permute = function (nums) {
  if (nums.length === 0) return [[]]
  if (nums.length === 1) return [nums]
  if (nums.length === 2)
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ]

  return nums.flatMap((n) => {
    return permute(nums.filter((i) => i !== n)).map((i) => [n, ...i])
  })
}
