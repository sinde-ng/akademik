const mysql = require('mysql')

const db = mysql.createConnection({
    database: "db_mahasiswa",
    host: "localhost", 
    user: "root",
    password: ""    
})

module.exports = db