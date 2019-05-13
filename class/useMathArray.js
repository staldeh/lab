const MathS = require('./mathS.js')
var list = []
const size = 50;


for(var i = 0; i < size; i++) {
    let g = new MathS(1,i)
    list.push(g);
}

list.forEach(function(item, index, array) {
    console.log(index, item.sum());
  });
  
