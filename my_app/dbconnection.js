const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    port: process.env.DBPORT,
    dialect: process.env.DBDIALECT,
    logging: false, // Disable logging for cleaner console
});

sequelize.authenticate()
    .then(() => {
        console.log("Database connection established successfully.");
    })
    .catch((error) => {
        console.error("Database connection error:", error.message);
    });

module.exports = sequelize;
