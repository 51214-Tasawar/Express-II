const sequelize = require("../dbconnection");
const Student = require("./NewTables/Student");

// Register the model
sequelize.models.Student = Student;

module.exports = { sequelize, Student };
