var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "monitorELM.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date text, 
            name text, 
            data real
            )`,
        (err) => {
            if (err) {
                // Table already created
                console.log("Already");
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO data (date, name, data) VALUES (?,?,?)'
                db.run(insert, [new Date().toISOString(),"freeMem",12.34])
                db.run(insert, [new Date().toISOString(),"freeMem",12.01])
            }
        }); 
        db.close(); 
    }
});


module.exports = db