// You are given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

const maximum69Number = function (num) {
  let numStr = String(num)
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "6") return numStr.replace("6", "9")
  }
  return Number(numStr)
}
