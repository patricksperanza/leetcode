// Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

// In the American keyboard:

// the first row consists of the characters "qwertyuiop",
// the second row consists of the characters "asdfghjkl", and
// the third row consists of the characters "zxcvbnm".

const findWords = function (words) {
  const result = []
  words.forEach((word) => {
    const letters = word.split("")
    if (canBeTyped(letters)) {
      result.push(word)
    }
  })
  return result
}

function canBeTyped(arr) {
  const first = "qwertyuiop"
  const second = "asdfghjkl"
  const third = "zxcvbnm"
  return (
    arr.every((char) => first.includes(char.toLowerCase())) ||
    arr.every((char) => second.includes(char.toLowerCase())) ||
    arr.every((char) => third.includes(char.toLowerCase()))
  )
}
