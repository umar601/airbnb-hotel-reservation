const express = require("express");

const app = express();

const port = 8080;

require("dotenv").config();

const router = require("./routes/routes");

const configureMiddleware = require("./middlewares/middleware");


const url = "mongodb://127.0.0.1:27017/airbnb";

const { databaseconnection } = require("./connection");

const expressError = require("./expresserro");

const userRoute = require("./routes/userroute");


databaseconnection(url).then(()=>{
    console.log("sucessful")
}).catch((err)=>{
  console.log(err);
})

configureMiddleware(app);


app.use("/user",userRoute);

app.use("/hotel",router);


//if no route match 

app.all(/.*/, (req, res, next) => {
  next(new expressError(404, "Page not found"));
});

//error handling midlleware 

app.use((err,req,res,next)=>{


    let {status=500,message}= err;
    res.status(status).render("error",{message});

  })


  //server 

app.listen(port,()=>{

    console.log(`server is listening at port ${port}`);
})

