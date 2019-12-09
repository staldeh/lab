const getfile = require('./rClass.js')
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const newData = new MyEmitter();

let i;
let m = [];
for (i = 1; i < 4; i++) {
  m[i] = new getfile("u" + i + ".json", newData);
  m[i].start();
}

newData.on('event', (file,content) => {  
  console.log(file + ' says: '  + content);
  //Send to mqtt.
});