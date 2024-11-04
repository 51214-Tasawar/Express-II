
module.exports = {
    ResponseHandler :( res ,data )=>{
        try{
    return res.send({
        code : 200 ,
        data : data
    })
        }catch(error){
   res.send({
     code : 400 ,
     data : " "
   })
    }
    }
}