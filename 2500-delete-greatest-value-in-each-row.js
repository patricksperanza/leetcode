// You are given an m x n matrix grid consisting of positive integers.

// Perform the following operation until grid becomes empty:

// Delete the element with the greatest value from each row. If multiple such elements exist, delete any of them.
// Add the maximum of deleted elements to the answer.
// Note that the number of columns decreases by one after each operation.

// Return the answer after performing the operations described above.

var deleteGreatestValue = function (grid) {
  let answer = 0
  let deleted = []
  while (grid[0].length > 0) {
    for (let row of grid) {
      let max = Math.max(...row)
      deleted.push(max)
      row.splice(row.indexOf(max), 1)
    }
    answer += Math.max(...deleted)
    deleted = []
  }
  return answer
}
