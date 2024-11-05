const {hash}   = require("bcryptjs") ;
const responseHandler = require("../responseHandlr")

module.exports = {
   create :async(req ,res)=>{
       try{
req.body.Password = await hash(req.body.Password , 10)
   return responseHandler(res , req.body)
       }catch(error){
         return res.send({
            status  : "Something  goes Wrong" ,
            message : error ,
            response: {}
         })
       }
   } ,
   get :(req ,res)=>{
   try{
  return res.send({
    status : "Ok",
    message :"Get User Successfully" ,
    response : req.query
  })
   } catch(error){
   return res.send({
    status  : "Not Found",
    message : error ,
    response : {}
   })
   }
   } ,
   update :(req ,res)=>{
     try{
        return res.send({
            status : "Ok" ,
            message : "User Update Successfully",
            response : req.body 
            })
     }catch(error){
      return res.send({
        status : "Not Found" ,
      message : error ,
      response : {}
      })
     }
   } ,
   Deleteuser :(req,res)=>{
      try{
     return res.send({
        status : "Ok",
        message : "User Deleted Successfully",
        response : req.query
     })
      }catch(error){
      return res.send({
        status : "Not Found",
        message : error ,
        response : {}
      })
      }
   }
}