const {hash}   = require("bcryptjs") ;
const responseHandler = require("../responseHandlr")
const Error  = require("../errorHandler")

module.exports = {
   create :async(req ,res)=>{
       try{
req.body.Password = await hash(req.body.Password , 10)
   return responseHandler(res , req.body);
       }catch(error){
  return  Error(res, error);
       }
   } ,
   get :(req ,res)=>{
   try{
      return responseHandler(res , req.query);
   } catch(error){
      return  Error(res, error);
   }   
   } ,
   update :(req ,res)=>{
     try{
      return responseHandler(res , req.body);
     }catch(error){
      return  Error(res, error);
     }
   } ,
   Deleteuser :(req,res)=>{
      try{
         return responseHandler(res , req.query);
      }catch(error){
         return  Error(res, error);
      }
   }
}