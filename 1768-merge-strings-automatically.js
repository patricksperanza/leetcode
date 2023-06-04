// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

var mergeAlternately = function (word1, word2) {
  let res = ""
  let maxLength = Math.max(word1.length, word2.length)

  for (let i = 0; i < maxLength; i++) {
    if (word1[i]) res += word1[i]
    if (word2[i]) res += word2[i]
  }

  return res
}
