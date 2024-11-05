module.exports=(res , error)=>{
try{
return res.send({
  code : 400 ,
  error : error.message 
})
}catch(error){
 return res.send({
  code : 400 ,
  error : error 
 })
}
}