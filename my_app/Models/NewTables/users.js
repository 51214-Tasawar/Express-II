const { DataTypes , Model } = require("sequelize") ;
const connection = require("../../dbconnection");

class customers extends Model { } 

customers.init( {
    userId : {
        primaryKey : true ,
        type : DataTypes.STRING
    },
    name : {
        allowNull : false ,
        type : DataTypes.STRING
    },
    useranem : {
        allowNull : false ,
        unique : true ,
        type : DataTypes.STRING
    } ,
    password : {
        allowNull : false ,
        type : DataTypes.STRING
    }
} , 
{
    name : "Customers Table" ,
    timestamps : true ,
    paranoid  : true ,
    sequelize : connection

})

module.exports = customers