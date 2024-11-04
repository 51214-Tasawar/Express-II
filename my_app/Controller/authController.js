module.exports ={
   Signup : (req ,res)=>{
      console.log(req.body)
      res.send("Sign Up the New User") ;
   } ,
   Login : (req , res )=>{
      console.log(req.query)
    res.send("Login The New User ") ;
   } ,
   Logout:(req,res)=>{
    res.send("Logout the current User") ;
   }
}