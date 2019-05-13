const Range = require('./range.js')

// Here are example uses of this new Range class
let r = new Range(1,3);   // Create a Range object
console.log(r.includes(2))             // => true: 2 is in the range
console.log(r.toString() )             // => "(1...3)"
console.log([...r])                    // => [1, 2, 3]; convert to an array via iterator

console.log(r);