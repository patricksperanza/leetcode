// You are given a positive integer n. Each digit of n has a sign according to the following rules:

// The most significant digit is assigned a positive sign.
// Each other digit has an opposite sign to its adjacent digits.
// Return the sum of all digits with their corresponding sign.

// Example 1:

// Input: n = 521
// Output: 4
// Explanation: (+5) + (-2) + (+1) = 4.
// Example 2:

// Input: n = 111
// Output: 1
// Explanation: (+1) + (-1) + (+1) = 1.

const alternateDigitSum = function (n) {
  let sum = 0
  let digits = n
    .toString()
    .split("")
    .map((num) => Number(num))
  digits.forEach((num, i) => {
    if (i % 2 === 0) {
      sum += num
    } else {
      sum -= num
    }
  })
  return sum
}
