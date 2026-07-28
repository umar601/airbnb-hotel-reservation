// const path = require("path");
// const express = require("express");
// const methodOverride = require("method-override");
// const engine = require("ejs-mate");
// const cookieParser = require("cookie-parser");

// const expressSession = require("express-session");

// const flash = require("connect-flash");

// const passport = require("passport");

// const localStrategy = require("passport-local");

// const client = require("../models/user");



// function configureMiddleware(app) {
  
//   app.set("view engine", "ejs");
//   app.set("views", path.join(__dirname, "../views"));

  
//   app.use(express.static(path.join(__dirname, "../public")));
//   // app.use("/myuploads", express.static(path.join(__dirname, "../myuploads")));

  
//   app.use(express.urlencoded({ extended: true }));
//   app.use(express.json());

  
//   app.use(methodOverride("_method"));
//   app.engine("ejs",engine);

//   app.use(cookieParser("secret")); //incase of signed

//   //  app.use(cookieParser());   //for simple
  

//    app.use(expressSession(
//     {secret:"secret",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{
//       expires:Date.now()+7*24*60*60*1000,  //mean after one week
//     maxAge:Date.now()+7*24*60*60*1000,
//     httpOnly:true  //for cross scripting attacks

//     }
//   }));


//    app.use(flash());


// // app.use(passport.initialize());

// // app.use(passport.session());

// // passport.use(new localStrategy(client.authenticate()));


// // passport.serializeUser(client.serializeUser());

// // passport.deserializeUser(client.deserializeUser());


// app.use(passport.initialize());

// app.use(passport.session());  //identify indifferent pages 

// passport.use(new localStrategy(client.authenticate()));

// passport.serializeUser(client.serializeUser());

// passport.deserializeUser(client.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.message = req.flash("success");
//   // console.log(req.user)
//   res.locals.user = req.user;
//   res.locals.redirectUrl = req.session.url ;
//   // console.log(req.user)
//   next();
// });
// }

// module.exports = configureMiddleware;



const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const engine = require("ejs-mate");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");

// Fix: Correct user model import
const User = require("../models/user"); // Make sure this path is correct

function configureMiddleware(app) {
  
  // 1. SET VIEW ENGINE
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));
  
  // 2. STATIC FILES
  app.use(express.static(path.join(__dirname, "../public")));
  // app.use("/myuploads", express.static(path.join(__dirname, "../myuploads")));
  
  // 3. BODY PARSERS
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  // 4. METHOD OVERRIDE
  app.use(methodOverride("_method"));
  
  // 5. EJS ENGINE - FIX: Should be set BEFORE views are rendered
  app.engine("ejs", engine);
  
  // 6. COOKIE PARSER
  app.use(cookieParser("secret")); // For signed cookies
  
  // 7. EXPRESS SESSION - MUST be before passport
  app.use(expressSession({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true
    }
  }));
  
  // 8. FLASH MESSAGES - MUST be after session
  app.use(flash());
  
  // 9. PASSPORT - MUST be after session
  app.use(passport.initialize());
  app.use(passport.session());
  
  // 10. PASSPORT STRATEGY - Only if User model is valid
  if (User && typeof User.authenticate === 'function') {
    passport.use(new localStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  } else {
    console.error('User model not properly configured for Passport');
    console.log('Available User methods:', Object.keys(User));
  }
  
  // 11. RES.LOCALS MIDDLEWARE
  app.use((req, res, next) => {
    res.locals.message = req.flash("success");
    res.locals.user = req.user || null;
    res.locals.redirectUrl = req.session.url || null;
    res.locals.error = req.flash("error"); // Add error flash for messages
    next();
  });
  
  // 12. ERROR HANDLING MIDDLEWARE - Add this
  app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    req.flash('error', err.message || 'Something went wrong!');
    res.status(err.status || 500);
    res.render('error', { 
      error: err,
      message: err.message || 'Internal Server Error'
    });
  });
  
  console.log('✅ Middleware configured successfully!');
}

module.exports = configureMiddleware;
