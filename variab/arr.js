var ph = []
console.log (ph);

ph["a"] = 'Hej';
ph["b"] = 'Hello';
console.log (ph);

ph["a"] = 'Ojoj';
ph["b"] = 'hoj';
console.log (ph);

var sen = JSON.parse('{"d" :  {"a" : 4, "b" : 3} }')

console.log(sen["d"])
console.log(sen["d"]["a"])
console.log(sen.d.b)
