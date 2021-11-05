const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        password:'$eaDZVn$i5eG',
        database:'election'
    },
)

module.exports = db;