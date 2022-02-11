var db = require("./logic/database.js")

var sql = "select * from user"
var params = []
db.all(sql, params, (err, rows) => {
    if (err) {
       console.log("Error")
     }
        console.log(rows)
    });



db.close()