const users = require("./NewTables/users") ;
const customers = require("./NewTables/customers")
const sequelize = require("../dbconnection") ;

const model = { users , customers } ;

const db = {};
// db.sequelize = customers ;
db.sequelize = customers;
sequelize.model = model ;

module.exports = { db , model } ;