const rout= require("express").Router();

const {Create , Get , Update , Delete} = require("../Validator/uservalidator");
const {create , get , update , Deleteuser} = require("../Controller/userController")

rout.post("/createUser" , Create , create);
rout.get("/getUser" , Get , get);
rout.patch("/updateUser" , Update , update);
rout.delete("/deleteUser" ,Delete , Deleteuser);

module.exports = rout ;