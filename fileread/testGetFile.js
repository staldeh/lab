const getfile = require('./rClass.js')

//const x = new getfile('u1.json');

let i;
let m = [];
for (i = 1; i < 4; i++) {
  m[i] = new getfile("u" + i + ".json");
  
}


//console.log(x.name);

for (i = 1; i < 4; i++) {
    console.log(m[i].name);
  }