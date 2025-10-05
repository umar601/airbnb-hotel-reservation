const express = require("express");

const userRoute = express.Router();

const {handlerToLogin,handlerToSignup,handlerToAddUser,handdlerToVerifyLogin} = require("../controllers/controller");

const passport = require("passport");

userRoute.route("/signup")
.get(handlerToSignup)
.post(handlerToAddUser);


userRoute.route("/login")
.get(handlerToLogin)
.post(passport.authenticate('local',{faliureRedirect:"/user/login",failureFlash:true}),handdlerToVerifyLogin)


module.exports = userRoute;
