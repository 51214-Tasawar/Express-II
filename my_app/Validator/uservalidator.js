const User = require("joi") ;

const UserInfo = User.object ({
    name :User.string().min(10).max(100).required(),
    username:User.string().min(10).max(45).required(),
    Password :User.string().min(6).max(60).required()
})

const newUserInfo = async(req , res , next )=>{
    try{
      await  UserInfo.validateAsync(req.body);
        next();
    }catch(error){
        return res.send({
            error : error.message
        })
    }
}

module.exports = newUserInfo ;