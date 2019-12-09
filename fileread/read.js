const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('u1.json',{highWaterMark : 20}),
    crlfDelay: Infinity
  });


function resume() {
    rl.resume();
  }

rl.on('line', (line) => {
    rl.pause()
    setTimeout(resume, 1000);
    if (line == '[') {
        console.log(`Start of file`);
    }
    else if (line == ']') {
        console.log(`End of file`);
    }
    else {
        console.log(`Received: ${line}`);
    }    
  });

