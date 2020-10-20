require('dotenv').config();

const config = {
    dbUser: process.env.DB_USER,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPass: process.env.DB_PASSWORD
}

module.exports = { config };