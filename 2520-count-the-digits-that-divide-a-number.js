// Given an integer num, return the number of digits in num that divide num.

// An integer val divides nums if nums % val == 0.

// Example 1:
// Input: num = 7
// Output: 1
// Explanation: 7 divides itself, hence the answer is 1.

const countDigits = function (num) {
  let count = 0
  let digits = num
    .toString()
    .split("")
    .map((n) => Number(n))
  for (let val of digits) {
    if (num % val === 0) count++
  }
  return count
}
