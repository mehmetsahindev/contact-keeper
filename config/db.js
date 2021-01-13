const mysql = require('mysql');
const config = require('config');
const db = config.get('database');

const connectDB = async () => {
    try {
        mysql.createConnection(db).connect(err => {
            console.log('DB connected...');
        })
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;