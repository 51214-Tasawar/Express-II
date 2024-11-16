const {DataTypes , Model} =require("sequelize")
const {} = require("../../dbconnection")
class student extends Model {} ;

student.init (
    {
        stuId : {
          primaryKey : true ,
          type : DataTypes.STRING() 
        } ,
        stuname : {
           allowNull : false ,
           type : DataTypes.STRING()
        } ,
        stuemail : {
            allowNull : false ,
            unique : true ,
            type : DataTypes.STRING()
        } ,
        stupassword :{
            allowNull  : false ,
            type : DataTypes.STRING()
        }
    } ,
    {
        name : "Student Table" ,
        timestamps : true ,
        paranoid : true ,
        sequelize : newcon
    }
)