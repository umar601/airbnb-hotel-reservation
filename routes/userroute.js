const express = require("express");

const userRoute = express.Router();

const {handlerToLogin,handlerToSignup} = require("../controllers/controller");

userRoute.get("/signup",handlerToSignup)
userRoute.get("/login",handlerToLogin)


module.exports = userRoute;
