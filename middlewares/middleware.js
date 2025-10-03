const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const cookieParser = require("cookie-parser");

const expressSession = require("express-session");

const flash = require("connect-flash");



function configureMiddleware(app) {
  
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  
  app.use(express.static(path.join(__dirname, "../public")));
  app.use("/myuploads", express.static(path.join(__dirname, "../myuploads")));

  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  
  app.use(methodOverride("_method"));
  app.engine("ejs",engine);

  app.use(cookieParser("secret")); //incase of signed

  //  app.use(cookieParser());   //for simple
  

   app.use(expressSession({secret:"secret",resave:false,saveUninitialized:true}));


   app.use(flash());
}

module.exports = configureMiddleware;
