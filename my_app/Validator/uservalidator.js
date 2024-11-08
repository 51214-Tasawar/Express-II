const Joi = require("joi")
const Error = require("../errorHandler")

const create = Joi.object({
 name    : Joi.string().min(5).max(60).required(),
username : Joi.string().min(6).max(60).required() ,
Password : Joi.string().min(8).max(1000).required() 
})
const update = Joi.object({
    name    : Joi.string(),
    username : Joi.string().required() ,
})
const getdelete = Joi.object({
    username : Joi.string().required() ,
})

module.exports ={
    Create :async(req,res, next)=>{
    try{
  await create.validateAsync(req.body) ;
  next();
    }catch(error){
      return  Error(res, error);
    }
    } ,
    Get:async(req, res , next)=>{
   try{
  await getdelete.validateAsync(req.queru)
  next();
   }catch(error){
    return  Error(res, error);
   }
    } ,
    Update:async(req, res , next)=>{
    try{
  await update.validateAsync(req.body);
   next();
    }catch(error){
      return  Error(res, error);
    }
    } ,
    Delete:async(req, res , next)=>{
   try {
    await  getdelete.validateAsync(req.query) ;
     next();
   }catch(error){
    return  Error(res, error);
   }
    }
}