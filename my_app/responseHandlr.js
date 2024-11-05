const responseHandler=(res , data)=>{
    try{
   return res.send({
        code : 200 ,
        data : data,
    })
    }catch(error){
    return res.send({
        code : 400 ,
        error: " " 
    })
    }
}

module.exports = responseHandler ;