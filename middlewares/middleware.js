const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const cookieParser = require("cookie-parser");

const expressSession = require("express-session");

const flash = require("connect-flash");

const passport = require("passport");

const localStrategy = require("passport-local");

const client = require("../models/user");



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
  

   app.use(expressSession(
    {secret:"secret",
    resave:false,
    saveUninitialized:true,
    cookie:{
      expires:Date.now()+7*24*60*60*1000,  //mean after one week
    maxAge:Date.now()+7*24*60*60*1000,
    httpOnly:true  //for cross scripting attacks

    }
  }));


   app.use(flash());


// app.use(passport.initialize());

// app.use(passport.session());

// passport.use(new localStrategy(client.authenticate()));


// passport.serializeUser(client.serializeUser());

// passport.deserializeUser(client.deserializeUser());

app.use((req, res, next) => {
  res.locals.message = req.flash("success");
  next();
});

app.use(passport.initialize());

app.use(passport.session());  //identify indifferent pages 

passport.use(new localStrategy(client.authenticate()));

passport.serializeUser(client.serializeUser());

passport.deserializeUser(client.deserializeUser());
}

module.exports = configureMiddleware;
