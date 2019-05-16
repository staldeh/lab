let math = require('mathjs')
const a = math.matrix([[0, 1], [2, 3], [4, 5]])

// The iteration below will output the following in the console:
//    value: 0 index: [0, 0]
//    value: 1 index: [0, 1]
//    value: 2 index: [1, 0]
//    value: 3 index: [1, 1]
//    value: 4 index: [2, 0]
//    value: 5 index: [2, 1]
a.forEach(function (value, index, matrix) {
  console.log('value:', value, 'index:', index) 
}) 

// Apply a transformation on the matrix
const b = a.map(function (value, index, matrix) {
  return math.multiply(math.sin(value), math.exp(math.abs(value))) 
}) 
console.log(b.format(5))  // [[0, 2.2874], [6.7188, 2.8345], [-41.32, -142.32]]

// Create a matrix with the cumulative of all elements
let count = 0
const cum = a.map(function (value, index, matrix) {
  count += value 
  return count 
}) 
console.log(cum.toString())  // [[0, 1], [3, 6], [10, 15]]

