const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'us-cdbr-east-04.cleardb.com',
  user: 'ba357698295d31',
  database: 'mystore',
  password: 'c696aff9',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})


module.exports = pool