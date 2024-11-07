
const Customers = require("./NewTables/users");
const connection = require("../dbconnection");

const model = {Customers};

const obj = {} ;
obj.connection = connection ;
connection.customers = model ;

module.exports = {obj , model}


// const sequelize = require("../dbconnection") ;
// const Users =require("./NewTables/users") ;

// const model = {Users} ;

// const db = {} ;
// db.sequelize = sequelize ;
// sequelize.model = model ;

// module.exports = {db , model}