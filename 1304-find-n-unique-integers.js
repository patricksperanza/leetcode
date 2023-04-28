// Given an integer n, return any array containing n unique integers such that they add up to 0.

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

var sumZero = function (n) {
  const arr = []
  if (n % 2 !== 0) {
    arr.push(0)
  }
  for (let i = 1; i <= n / 2; i++) {
    arr.push(i, -i)
  }
  return arr
}
