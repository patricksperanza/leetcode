// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

// A common string is a string that appeared in both list1 and list2.

// A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

// Return all the common strings with the least index sum. Return the answer in any order.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only common string is "Shogun".

const findRestaurant = function (list1, list2) {
  const map = {}
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      map[list1[i]] = i + list2.indexOf(list1[i])
    }
  }
  let min = Math.min(...Object.values(map))
  const result = []
  for (let el in map) {
    if (map[el] === min) {
      result.push(el)
    }
  }
  return result
}
