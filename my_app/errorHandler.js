
module.exports ={
    error : (res , eror)=>{
     try{
   return res.send({
    code : 400 ,
    error : eror 
   })
     }catch(error){
     res.send({
        code : 400 ,
    error : eror
     })
     }
    }
}