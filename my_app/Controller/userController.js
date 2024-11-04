const {hash , hashSync}= require("bcryptjs") 


const alluser =(req,res)=>{
    res.send("Show me the All Users  ------ >")
}
const activeuser=(req ,res)=>{
    res.send("Show the Active Uset    ------>")
}

const Newuser=async(req ,res)=>{
    req.body.Password = await hash(req.body.Password , 10)
    console.log(req.body)
   res.send("Create the New User ------>")
}


module.exports = {alluser , activeuser , Newuser} ;