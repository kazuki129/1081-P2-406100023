const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Kazuki101",
    database: "dbfinal"

});

// Testing database connection
// pool.query("SELECT * FROM classdemo",function(err,results){
//     console.log(JSON.stringify(results));
//     console.log("Database dbfinal connected.");
// });

module.exports = pool.promise();
 