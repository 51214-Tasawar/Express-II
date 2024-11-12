const { DataTypes , Model } = require("sequelize");
const sequelize = require("../../dbconnection")  

class customers extends Model { } ;

customers.init(
    {
        custId : {
            primaryKey :true ,
            type : DataTypes.STRING
        },
        custname : {
            unique : true ,
            type : DataTypes.STRING ,
            allowNull : false
        },
        custname : {
            type : DataTypes.STRING ,
            allowNull : false
        } ,
        custpassword : {
            type : DataTypes.STRING ,
            allowNull : false
        }
    },
    {
   name : "Customers Table" ,
   timestamps : true ,
   paranoid : true ,
   sequelize : sequelize
    }
)

module.exports = customers ;