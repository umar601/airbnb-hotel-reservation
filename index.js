const express = require("express");

const app = express();

const port = 8080;

const router = require("./routes/routes");

const configureMiddleware = require("./middlewares/middleware");

const { databaseconnection } = require("./connection");

const url = "mongodb://127.0.0.1:27017/airbnb"

const expressError = require("./expresserro");

const userRoute = require("./routes/userroute");

// const client = require("./models/user");


databaseconnection(url).then(()=>{
    console.log("sucessful")
}).catch((err)=>{
    console.log("failed")
})

configureMiddleware(app);

// app.get("/hotel/demo",(req,res)=>{

//   // let user = new client({

//   //   email:"umarshah",
//   //   username:"umarrrd"
//   // })
//   res.render("login")
//   // await client.register(user,"password");
// })

app.use("/user",userRoute);

app.use("/hotel",router);

app.all(/.*/, (req, res, next) => {
  next(new expressError(404, "Page not found"));
});

app.use((err,req,res,next)=>{


    let {status=500,message}= err;
    res.status(status).render("error",{message});

  })





app.listen(port,()=>{

    console.log(`server is listening at port ${port}`);
})

