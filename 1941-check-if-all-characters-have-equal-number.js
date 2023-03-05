// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

const areOccurrencesEqual = function (s) {
  const map = {}
  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1)
  }
  let res = true
  let comparison = map[s[0]]
  console.log(comparison)
  for (let char in map) {
    if (map[char] !== comparison) res = false
  }
  return res
}
