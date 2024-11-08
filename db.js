const mysql = require('mysql2/promise');

const connectDB = async () => {
    const db = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_DB
    });
    return db;
}

module.exports = connectDB