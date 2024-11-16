const express = require("express");
const bodyParser = require("body-parser")

const rout = require("./Router/userRouter") 
const routes = require("./Router/authRouter")
// const {db} = require("./Models/index")
const {conn} = require("./Models/index")


const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())


app.use("/users" , rout) ;
app.use("/auth" , routes) ;

app.get("/all", (req ,res)=>{
  return res.send("This Is Request for User Info ---> ")
})


conn.connection.sync({alter : true}).then(()=>{
  console.log("New Data Base Created Successfully");
}).catch(()=>{
  console.log("My New Connection gets Error")
})