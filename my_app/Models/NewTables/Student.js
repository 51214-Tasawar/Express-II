const { DataTypes , Model } = require("sequelize");

class student extends Model { } ;

student.init(
    {
        studentId : {
           primaryKey : true  ,
           type : DataTypes.STRING
        } ,
        studentname : {
         type : DataTypes.STRING ,
         allowNull : false
        } ,
        studentEmail : {
          type : DataTypes.STRING  ,
          allowNull : false ,
          unique : true
        } ,
        studentPassword : {
           type : DataTypes.STRING ,
           allowNull : false
        }
    } , {
        name : "Students _Table" ,
        timestamps : true , 
        paranoid : true ,
       
    })

    module.exports = student ;
