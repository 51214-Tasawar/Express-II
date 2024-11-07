require("dotenv").config();

const {Sequelize} = require("sequelize");

const connection = new Sequelize({
   host : process.env.DBHOST ,
   name : process.env.DBNAME ,
   username:process.env.DBUSERNAME ,
   dialect : process.env.DBDIALECT ,
   password : process.env.DBPASSWORD,
   port : process.env.DBPORT
}) ;

module.exports = connection ; 

















// Code For Another Table 
// require("dotenv").config();
// const {Sequelize} = require("sequelize");
//  const sequelize = new Sequelize({
//    host: process.env.DBHOST ,
//     username: process.env.DBUSERNAME,
//     password: process.env.DBPASSWORD ,
//     database: process.env.DBNAME,
//     dialect: process.env.DBDIALECT,
//     port: process.env.DBPORT })
//  sequelize.authenticate().then(()=>{
//    console.log("Conected to The DataBase");
// }).catch((error)=>{
//    console.log(error)
//    console.log("Not Conected to The DataBase"); })
//  module.exports = sequelize ;
