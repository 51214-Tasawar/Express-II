const express = require("express");
const bodyParser = require("body-parser")

const rout = require("./Router/userRouter") 
const routes = require("./Router/authRouter")
const {db , model} = require("./Models/index")

const port = 3001 ;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())


app.use("/users" , rout) ;
app.use("/auth" , routes) ;

app.get("/all",(req ,res)=>{
  return res.send("This Is Request for User Info ---> ")
})



