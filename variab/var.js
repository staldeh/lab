let oj = []
var sen = JSON.parse('{"d" :  {"a" : 4, "b" : 3} }')
oj.push(sen)
var sen = JSON.parse('{"d" :  {"a" : 5, "b" : 8} }')
oj.push(sen)

let vomp = { data: 
                {val : "hej"}}
oj.push(vomp)
let h = {val : "hopp"}
vomp = { data: 
    h}
oj.push(vomp)
const i = "fopp"
h = {val : i}
vomp = { data: 
    h}
oj.push(vomp)

console.log(oj)
