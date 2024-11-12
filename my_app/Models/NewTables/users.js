const { DataTypes , Model } = require("sequelize") ;

class users extends Model { } ;

users.init(
    {
        userId : {
            primaryKey : true ,
            type : DataTypes.STRING()
        }
    },{})
