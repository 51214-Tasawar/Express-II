const { hash } = require("bcryptjs")
const alluser =(req,res)=>{
    res.send("Show me the All Users  ------ >")
}
const activeuser=(req ,res)=>{
    res.send("Show the Active Uset    ------>")
}

const Newuser= async(req ,res)=>{
   try{
   req.body.Password = await hash(req.body.Password , 10)
   return res.send({
    status : " Ok ",
    code : 200 ,
    response : req.body 
   })

   }catch(error){
   return res.send({
    status : "Not Ok" ,
    code : 400 ,
    error : error.message 
   })
   }
}


module.exports = {alluser , activeuser , Newuser} ;