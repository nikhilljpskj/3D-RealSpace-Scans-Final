const mysql = require('mysql2');
require('dotenv').config();

let db;

const connectToDatabase = () => {
    db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err.message);
            console.log('Retrying in 10 seconds...');
            setTimeout(connectToDatabase, 10000); // Retry after 5 seconds
        } else {
            console.log('Connected to MySQL database');
        }
    });

    // Reconnect on connection loss
    db.on('error', (err) => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection lost. Reconnecting...');
            connectToDatabase(); // Recreate the connection
        } else {
            console.error('Database error:', err);
            throw err;
        }
    });
};

connectToDatabase();

module.exports = db;
