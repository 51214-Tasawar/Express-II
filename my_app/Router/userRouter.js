const rout = require("express").Router();

const User = require("../Controller/userController");
const  as = require("../Validator/uservalidator")

rout.get("/alluser" , User.alluser) ;
rout.get("/activeuse" , User.activeuser);
rout.post("/Newuser" , as,User.Newuser);

module.exports = rout ;