const minBitFlips = function (start, goal) {
  if (start === goal) return 0
  let xor = start ^ goal
  let count = 0
  while (xor > 0) {
    xor &= xor - 1
    count++
  }
  return count
}
