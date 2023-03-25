const countConsistentStrings = function (allowed, words) {
  let count = 0
  words.forEach((word) => {
    const letters = word.split("")
    const consistent = letters.every((letter) => allowed.includes(letter))
    if (consistent) count++
  })
  return count
}

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Example 1:

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
