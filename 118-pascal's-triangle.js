// 118. Pascal's Triangle
// Easy
// 10.6K
// 344
// Companies
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  const res = []

  for (let i = 0; i < numRows; i++) {
    res.push([1])
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        res[i][j] = 1
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
      }
    }
  }
  return res
}
