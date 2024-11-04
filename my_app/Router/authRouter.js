const routes = require("express").Router();
const {
    Signup ,
    Login,
    Logout
}=require("../Controller/authController")

routes.get("/SignUp" , Signup )
routes.get("/Login" , Login )
routes.get("/Logout" , Logout )

module.exports = routes
