require("dotenv").config();
const {Sequelize} = require("sequelize")

const connection = new Sequelize ( {
host : process.env.DBHOST ,
username : process.env.DBUSERNAME ,
database : process.env.DBNAME ,
port : process.env.DBPORT ,
password : process.env.DBPASSWORD ,
dialect : process.env.DBDIALECT
})


module.exports = connection ;

























