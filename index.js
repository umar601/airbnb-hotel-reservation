const express = require("express");

const app = express();

const port = 8080;

const path = require("path");

const mongoose = require("mongoose");

const methodOverride = require("method-override");

const user = require("./models/airbnb");

const multer = require("multer");




app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(methodOverride("_method"));


app.use("/myuploads", express.static(path.join(__dirname, "myuploads")));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,path.join(__dirname,"myuploads")); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});


const uplaod = multer({storage:storage});


async function main() {

    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
  
}

main()
.then((res)=>{
    
    console.log("connected sucessfully");
})
.catch((err)=>{
    
    console.log(err);
})

app.get("/hotel",async(req,res)=>{

    let allDetails = await user.find();

    res.render("home",{allDetails});
})

app.get("/hotel/new",(req,res)=>{

    res.render("newhotel");
})

app.post("/hotel",uplaod.array('images',10),async(req,res)=>{

    let imageUrls = [];

    if (req.files && req.files.length > 0) {

        imageUrls = req.files.map((file) => {

        return `${req.protocol}://${req.get("host")}/myuploads/${file.filename}`;
    });
}

    let {sellername,type,price,sellno,city,location,status,images,description} = req.body;

    let newuser = new user({
        sellername:sellername,
        type:type,
        price:parseInt(price),
        sellno:sellno,
        city:city,
        location:location,
        status:status,
        images:imageUrls,
        description:description
    });

    await newuser.save().then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    })

    res.redirect("http://localhost:8080/hotel");
})

app.get("/hotel/view/:id",async(req,res)=>{

    let {id} = req.params;

    let data = await user.findById(id);

    res.render("view",{data});


})

app.get("/hotel/:id",async(req,res)=>{

    let {id} = req.params;

    let data = await user.findById(id);

    res.render("edit",{data});

})

app.patch("/hotel/:id",async(req,res)=>{

    let {id} = req.params;
    console.log("update")

    let {sellername,type,price,sellno,city,location,status,images,description} = req.body;

    await user.findByIdAndUpdate(id,{

         sellername:sellername,
        type:type,
        price:parseInt(price),
        sellno:sellno,
        city:city,
        location:location,
        status:status,
        description:description

    });

    res.redirect("/hotel")


})


app.delete("/hotel/:id",async(req,res)=>{

    let {id} = req.params;

    await user.findByIdAndDelete(id);

    res.redirect("/hotel")

})

app.post("/hotel/search",async(req,res)=>{

    let {search} = req.body;

    let allDetails = await user.find(

        {
            $or:[{sellername:search},{city:search}]
        }
    )
    if(allDetails){
        res.render("home",{allDetails})
    }else{
        redirect("/hotel")
    }
})



app.listen(port,()=>{

    console.log(`server is listening at port ${port}`);
})

