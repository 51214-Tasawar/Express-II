const {student} = require("./NewTables/Student") ;

const {newcon} = require("../dbconnection")

const Tables = {student} ;
const conn = { } ;

conn.connection = newcon ;
newcon.Tables = myTable ;

module.exports = {conn}
