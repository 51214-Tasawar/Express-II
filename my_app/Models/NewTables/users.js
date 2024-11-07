const {DataTypes , Model} = require("sequelize") ;

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
    paranoid : true
})

module.exports = Users ;