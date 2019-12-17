const getfile = require('./rClass.js')
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const newData = new MyEmitter();

let i;
let m = [];
for (i = 1; i < 10; i++) {
  m[i] = new getfile("datat/pump0" + i + ".json", newData);
  m[i].start();
}

newData.on('line', (file,content) => {  
  content.ts = new Date();
  console.log('\x1b[32m' + file + ' says:\x1b[0m'  + JSON.stringify(content));
  //Send to mqtt.
})
.on('close', (obj) => {
  console.log('\x1b[32m',"Restarting " + obj.name,'\x1b[0m')
  obj.start();
})