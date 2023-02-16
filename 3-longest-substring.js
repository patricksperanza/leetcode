// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

const lengthOfLongestSubstring = function (s) {
  let maxLength = 0
  let charSet = new Set()
  let i = 0
  let j = 0

  while (i < s.length && j < s.length) {
    if (!charSet.has(s[j])) {
      charSet.add(s[j])
      j++
      maxLength = Math.max(maxLength, j - i)
    } else {
      charSet.delete(s[i])
      i++
    }
  }

  return maxLength
}

const lengthOfLongestSubstringNotOptimized = function (s) {
  let maxLength = 0
  let currentSubstring = ""

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i]
    const charIndex = currentSubstring.indexOf(currentChar)

    if (charIndex !== -1) {
      currentSubstring = currentSubstring.slice(charIndex + 1)
    }

    currentSubstring += currentChar
    maxLength = Math.max(maxLength, currentSubstring.length)
    console.log(currentSubstring)
  }

  return maxLength
}
