// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

const canConstruct = function (ransomNote, magazine) {
  const magLetters = magazine.split("")
  for (let char of ransomNote) {
    if (magLetters.includes(char)) {
      magLetters.splice(magLetters.indexOf(char), 1)
    } else {
      return false
    }
  }
  return true
}
