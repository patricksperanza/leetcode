// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

const checkIfExist = function (arr) {
  const map = {}
  for (let i = 0; i < arr.length; i++) {
    const double = arr[i] * 2
    const half = arr[i] / 2
    if (map[double] || map[half]) return true
    map[arr[i]] = true
  }
  return false
}
