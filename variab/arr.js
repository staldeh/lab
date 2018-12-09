var ph = []
console.log (ph);

ph["a"] = 'Hej';
ph["b"] = 'Hello';
console.log (ph);

ph["a"] = 'Ojoj';
ph["b"] = 'hoj';
console.log (ph);

console.log('sen:')

var s = {"d" :  {"a" : 4, "b" : 3} }
console.log(s.d)
var sen = JSON.parse('{"d" :  {"a" : 4, "b" : 3} }')
console.log(sen)
console.log(JSON.stringify(sen))

console.log(sen["d"])
console.log(sen["d"]["a"])
console.log(sen.d.b)
console.log('Arrays:')

let arr = [];

arr["data"] = '{ "d" { "temp" : 4 }}'
arr["data"] = '{ "d" { "temp" : 1 }}'
arr.push ( '{ "d" { "temp" : 5 }}')
console.log(arr)