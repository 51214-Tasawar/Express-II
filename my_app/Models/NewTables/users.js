const {DataTypes , Model} = require("sequelize") ;
const sequelize = require("../../dbconnection")
class Users extends Model {} ;

Users.init( {
    userId :{
        primaryKey : true ,
        type : DataTypes.STRING
    } , 
    username : {
        allowNull : false ,
        unique : true ,
        type : DataTypes.STRING ,    
    } ,
    name : {
        allowNull : false ,
        type  : DataTypes.STRING
    } ,
    password :{
        allowNull : false ,
        type : DataTypes.STRING
    }

},
{
    name : "Users" ,
    timestamps : true ,
    paranoid : true ,
    sequelize :sequelize 
})

module.exports = Users ;