require('dotenv').config();

const updateTimePump = 10000;

const { Pool } = require('pg')
const pool = new Pool({
  host: process.env.Host,
  port: process.env.Port,
  user: process.env.Username,
  password: process.env.Password,
  database: process.env.DB,
  ssl: 'true'
})
let row = 1;

function query () {
  pool.connect((err, client, release) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
      client.query('select * from pumpsimdata where seq = ' + row, (err, result) => {
        release() //Pool release
        if (err) {
         return console.error('Error executing query', err.stack)
        }
        console.log('========== ' + row);

        //console.log(result.rows)
        result.rows.forEach(element => { 
          let e = JSON.parse(element.json);
          e.ts = new Date();
          // Send to mqtt
          console.log(element.pumpid + ' sends: \n' + JSON.stringify(e)); 
          });
        row++; 
      })
    }
  })
};



// After on connect mqtt
query ()
setInterval(query, updateTimePump);


process.on('SIGINT', function() {
  pool.end(err => {
    console.log('client has disconnected')
    if (err) {
    console.log('error during disconnection', err.stack)
    }
  }) 

    process.exit(0);
  });

