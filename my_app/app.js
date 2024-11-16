const express = require("express");
const bodyParser = require("body-parser")

const rout = require("./Router/userRouter") 
const routes = require("./Router/authRouter")
// const {db} = require("./Models/index")
const {newTable} = require("./Models/index")


const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json())


app.use("/users" , rout) ;
app.use("/auth" , routes) ;

app.get("/all", (req ,res)=>{
  return res.send("This Is Request for User Info ---> ")
})
// db.sequelize.sync({alert : true}).then(port , ()=>{
//   console.log(`Testing at Port ${port}`)
// }).catch(()=>{
//   console.log("Something Wants Wrong")
// })

newTable.sequelize.sync({alert : true}).then(()=>{
console.log("Connected Successfully")
}).catch(()=>{
  console.log("Not Connected Properly")
})