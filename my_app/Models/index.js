const sequelize = require("../dbconnection") ;
const Users =require("./NewTables/users") ;

const model = {Users} ;

const db = {} ;
db.sequelize = sequelize ;
sequelize.model = model ;

module.exports = {db , model}