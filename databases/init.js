const mysql = require('mysql2');

// Initialization
//let db = mysql.createConnection({
//    host: 'remotemysql.com',
//    user: 'f0n8bhbA7T',
//    password: 'LOPBaFyG3W',
//    database: 'f0n8bhbA7T' 
//});
let db = mysql.createConnection({
    host: 'db4free.net',
    user: 'team_dui_admin',
    password: '25112000',
    database: 'team_dui',
    port: '3306'
});

// Connect to database
db.connect(function(error){
    if(error){
        console.log('Error: ' + error.message);
    } else {
        console.log('Connected to Database');
    }
});

// Exports module db
module.exports = db;