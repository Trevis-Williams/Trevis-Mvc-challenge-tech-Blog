// config/config.js
const { Sequelize } = require('sequelize');

// If using environment variables to store your database credentials (recommended)
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // User
  process.env.DB_PASSWORD, // Password
  {
    host: process.env.DB_HOST, // Database host
    dialect: 'mysql',          // We specify the dialect here
    port: process.env.DB_PORT, // Database port (default is 3306 for MySQL)
    // Additional Sequelize configuration here
  }
);

module.exports = sequelize;
