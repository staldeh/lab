const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('u1.json',{highWaterMark : 20}),
    crlfDelay: Infinity
  });



rl.on('line', (line) => {
    rl.pause()
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

function resume() {
    rl.resume();
  }
  

rl.on('pause', () => {
        console.log(`Paused...`);
        setTimeout(resume, 1000);

});

rl.on('resume', () => {
    console.log('Readline resumed.');
  });