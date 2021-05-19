const mysql = require('mysql');

const db = mysql.createConnection({
  user: 'root',
  password: 'please',
  database: 'letsrec'
})

db.connect();

module.exports = db;