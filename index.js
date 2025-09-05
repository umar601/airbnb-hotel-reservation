const express = require("express");

const app = express();

const port = 8080;

const router = require("./routes/routes");

const configureMiddleware = require("./middlewares/middleware");

const { databaseconnection } = require("./connection");

const url = "mongodb://127.0.0.1:27017/airbnb"


databaseconnection(url).then(()=>{
    console.log("sucessful")
}).catch((err)=>{
    console.log("failed")
})

configureMiddleware(app);

app.use("/hotel", router);


app.listen(port,()=>{

    console.log(`server is listening at port ${port}`);
})

