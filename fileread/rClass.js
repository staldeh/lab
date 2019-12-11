const fs = require('fs');
const readline = require('readline');

const updateTimePump = 10000;
class getFile {
 
    constructor (filename, emitter) {
        this.name = filename;
        this.newEmit = emitter;
    }

    name () {return this.name}

    start () {
        console.log("\x1b[34m",`Start of file: ` + this.name,'\x1b[0m');
        const rl = readline.createInterface({
            input: fs.createReadStream(this.name,{highWaterMark : 20}),
            crlfDelay: Infinity
          });
        
        
        function resume() {
            rl.resume();
          }
        
        rl.on('line', (line) => {
            rl.pause()
            setTimeout(resume, updateTimePump);
            if (line == '[') {
                //null
            }
            else if (line == ']') {
                //null
            }
            else {
                if (line.slice(-1) == ',') {
                    this.newEmit.emit('line', this.name, line.substring(0, line.length - 1))
                }
                else {
                    this.newEmit.emit('line', this.name, line) 
                }    
                //console.log(`Received: ${line} from file: ` + this.name);
            }
            

          });

        rl.on('close', () =>{
            console.log("\x1b[34m","Close " + this.name,'\x1b[0m');
            this.newEmit.emit('close', this) 
          })
        return;
    }
}

module.exports = getFile;