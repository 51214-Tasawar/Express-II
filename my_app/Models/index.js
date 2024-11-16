const {Student} = require("./NewTables/Student") ;

const {newcon} = require("../dbconnection")

const models = {Student} ;
const conn = { } ;

conn.connection = newcon ;
newcon.models = models ;

module.exports = {conn} ;
