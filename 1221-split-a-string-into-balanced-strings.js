// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// // Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

const balancedStringSplit = function (s) {
  let balancedCount = 0
  let rCount = 0
  let lCount = 0
  for (let i = 0; i < s.length; i++) {
    s[i] === "R" ? rCount++ : lCount++

    if (rCount === lCount) {
      balancedCount++
      rCount = 0
      lCount = 0
    }
  }
  return balancedCount
}
