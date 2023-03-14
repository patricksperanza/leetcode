// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, return the Hamming distance between them.

// Example 1:

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
// The above arrows point to positions where the corresponding bits are different.

const hammingDistance = function (x, y) {
  const xNums = x.toString(2).split("")
  const yNums = y.toString(2).split("")
  while (xNums.length < yNums.length) {
    xNums.unshift("0")
  }
  while (yNums.length < xNums.length) {
    yNums.unshift("0")
  }
  let dist = 0
  for (let i = 0; i < xNums.length; i++) {
    if (xNums[i] !== yNums[i]) dist++
  }
  return dist
}
