const express = require("express");
const bodyParser = require("body-parser")

const rout = require("./Router/userRouter") 
const routes = require("./Router/authRouter")
const  {obj,model}  = require("./Models/index")
// const {db , model} = require("./Models/index")

const port = 3001 ;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())


app.use("/users" , rout) ;
app.use("/auth" , routes) ;

app.get("/all",(req ,res)=>{
  return res.send("This Is Request for User Info ---> ")
})

obj.connection.sync({}).then(()=>{
  console.log("Conected To the Customers Table ")
}).catch(()=>{
  console.log("Not Conected To the Data Base ")
})

// db.sequelize.sync().then(()=>{
//   console.log("Contected To the Data Base")
// }).catch(()=>{
//   console.log("Error While Connection")
// })