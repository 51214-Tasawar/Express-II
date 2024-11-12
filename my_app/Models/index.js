const users = require("./NewTables/users") ;
const sequelize = require("../dbconnection") ;

const model = { users } ;

const db = {};
db.sequelize = sequelize ;
sequelize.model = model ;

module.exports = { db , model } ;