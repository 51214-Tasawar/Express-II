const student = require("./NewTables/Student") ;
const connection = require("../dbconnection");

const Tables = {student} ;

const newTable = {} ;

newTable.myconn = connection ;
connection.newSQL = Tables ;

module.exports ={newTable , Tables} ;







