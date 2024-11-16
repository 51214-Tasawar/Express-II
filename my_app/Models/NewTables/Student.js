const {DataTypes , Model} =require("sequelize")
const newcon = require("../../dbconnection")

class Student extends Model {} ;

Student.init (
    {
        stuId : {
          primaryKey : true ,
          type : DataTypes.STRING
        } ,
        stuname : {
           allowNull : false ,
           type : DataTypes.STRING
        } ,
        stuemail : {
            allowNull : false ,
            unique : true ,
            type : DataTypes.STRING
        } ,
        stupassword :{
            allowNull  : false ,
            type : DataTypes.STRING
        }
    } ,
    {
       tableName: "students" ,
        timestamps : true ,
        paranoid : true ,
        sequelize : newcon
    }
)

module.exports = {Student}