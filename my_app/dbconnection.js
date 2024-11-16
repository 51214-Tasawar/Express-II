require("dotenv").config()
const {Sequelize} = require("sequelize") ;

const newcon = new Sequelize ( {
    host : process.env.DBHOST ,
    username : process.env.DBUSERNAME ,
    port : process.env.DBPORT ,
    password : process.env.DBPASSWORD ,
    database : process.env.DBNAME ,
    dialect : process.env.DBDIALECT ,
}) 

module.exports = {newcon} ;