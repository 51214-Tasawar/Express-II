const { DataTypes , Model } = require("sequelize") ;

class users extends Model { } ;

users.init(
    {
        userId : {
            primaryKey : true ,
            type : DataTypes.STRING()
        } ,
        username : {
            unique : true ,
            type   : DataTypes.STRING(),
            allowNull : false
        } ,
        name :{
            type : DataTypes.STRING(),
            allowNull : false
        } ,
        password : {
            type : DataTypes.STRING() ,
            allowNull : false
        }
    },
    {
        name : "my_Table" ,
        timestamps : true ,
        paranoid :true ,
    
    }
)

module.exports = users ;