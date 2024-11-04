const New= require("joi");

const Newuser = New.object({
    name : New.string().min(10).max(20).required(),
    username : New.string().min(8).max(20).required(),
    Password : New.string().min(9).max(1000).required()
})

const Newuseradd = async(req , res , next)=>{
   try{
      await Newuser.validateAsync(req.body);
     next();
   }catch(error){
   return res.send({
    error : error.message 
   })
   }
}

module.exports = Newuseradd ;