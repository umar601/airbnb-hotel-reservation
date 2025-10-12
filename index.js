const express = require("express");

const app = express();

const port = 8080;

require("dotenv").config();

const router = require("./routes/routes");

const configureMiddleware = require("./middlewares/middleware");


const url = process.env.ATLASDB_URL;

const { databaseconnection } = require("./connection");

const expressError = require("./expresserro");

const userRoute = require("./routes/userroute");

// const client = require("./models/user");


if(!url){
  console.log("not")
}

databaseconnection(url).then(()=>{
    console.log("sucessful")
}).catch((err)=>{

  console.log(err);
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

