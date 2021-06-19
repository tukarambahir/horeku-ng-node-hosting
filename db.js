const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'mystore',
  password: 'admin123',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})


module.exports = pool