// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function (s) {
  const vowels = "aeiouAEIOU"
  const letters = s.split("")
  let start = 0
  let end = letters.length - 1

  while (start < end) {
    if (vowels.includes(letters[start]) && vowels.includes(letters[end])) {
      ;[letters[start], letters[end]] = [letters[end], letters[start]]
      start++
      end--
    } else if (vowels.includes(letters[start])) {
      end--
    } else {
      start++
    }
  }
  return letters.join("")
}
