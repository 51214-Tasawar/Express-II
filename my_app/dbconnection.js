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

newcon.authenticate().then(()=>{
    console.log("New Testing DataBase")
}).catch(()=>{
    console.log("Getting Error")
})

module.exports = {newcon} ;