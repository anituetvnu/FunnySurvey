const mysql = require('mysql2');

// Initialization
//let db = mysql.createConnection({
//    host: 'remotemysql.com',
//    user: 'f0n8bhbA7T',
//    password: 'LOPBaFyG3W',
//    database: 'f0n8bhbA7T' 
//});
let db = mysql.createConnection({
    host: 'databases.000webhost.com',
    user: 'id13308528_ngovanan',
    password: 'cri6{3Feg!TGrCI6',
    database: 'id13308528_surveys',
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