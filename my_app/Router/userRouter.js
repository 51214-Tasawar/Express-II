const rout = require("express").Router();

const User = require("../Controller/userController");
const newUserInfo = require("../Validator/uservalidator")

rout.get("/alluser" , User.alluser) ;
rout.get("/activeuse" , User.activeuser);
rout.post("/Newuser" , newUserInfo ,User.Newuser);

module.exports = rout ;