const fs = require('fs');
const readline = require('readline');

let js;
class getFile {
 
    constructor (filename, emitter) {
        this.name = filename;
        this.newEmit = emitter;
    }

    name () {return this.name}

    start () {
        //console.log('start');
        const rl = readline.createInterface({
            input: fs.createReadStream(this.name,{highWaterMark : 20}),
            crlfDelay: Infinity
          });
        
        
        function resume() {
            rl.resume();
          }
        
        rl.on('line', (line) => {
            rl.pause()
            setTimeout(resume, 1000);
            if (line == '[') {
                console.log(`Start of file: ` + this.name);
            }
            else if (line == ']') {
                console.log(`End of file: ` + this.name);
                rl.close();
            }
            else {
                if (line.slice(-1) == ',') {
                    this.newEmit.emit('event', this.name, line.substring(0, line.length - 1))
                }
                else {
                    this.newEmit.emit('event', this.name, line) 
                }    
                //console.log(`Received: ${line} from file: ` + this.name);
            }    
          });
        return;
    }
}

module.exports = getFile;