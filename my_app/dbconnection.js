require("dotenv").config();


const {Sequelize} = require("sequelize");

 const sequelize = new Sequelize({
    host : process.env.DBHOST,
    name : process.env.DBNAME,
    username:process.env.DBUSERNAME ,
    dialect : process.env.DBDIALECT,
    port : process.env.DBPORT,
    password : process.env.DBPASSWORD
 })

 

 module.exports = sequelize ;
