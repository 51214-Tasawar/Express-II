const {DataTypes , Model } = require("sequelize") ;
const connection = require("../../dbconnection");

class Customers extends Model { } 

Customers.init( {
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

module.exports = Customers