const { DataTypes , Model, Sequelize } = require("sequelize") ;
const connection = require("../../dbconnection");

class customers extends Model { } 

customers.init( {
    custId : {
        primaryKey : true ,
        type : DataTypes.STRING
    },
    custname : {
        allowNull : false ,
        type : DataTypes.STRING
    },
    custuseranem : {
        allowNull : false ,
        unique : true ,
        type : DataTypes.STRING
    } ,
    newpassword : {
        allowNull : false ,
        type : DataTypes.STRING
    }
} , 
{
    name : "Customers Table" ,
    timestamps : true ,
    paranoid  : true ,
    sequelize :connection

})

module.exports = customers