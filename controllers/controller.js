
const user = require("../models/airbnb");


async function hadlertogetalllisting(req,res){

    let allDetails = await user.find();

    res.render("home",{allDetails});
}


async function handlertopostlisting(req,res){

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

    res.redirect("http://localhost:8080/hotel");

}

async function handlertoedit(req,res){

    let {id} = req.params;

    let data = await user.findById(id);

    res.render("edit",{data});

}


async function handelertoupdate(req,res){

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


}

async function handlertoviewspecfic(req,res){

    let {id} = req.params;

    let data = await user.findById(id);

    res.render("view",{data});

}

async function handelertodelete(req,res){

    let {id} = req.params;

    await user.findByIdAndDelete(id);

    res.redirect("/hotel")

}

async function handlertosearch(req,res){

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

}


async function handlertonew(req,res){

    res.render("newhotel");

}


module.exports = {hadlertogetalllisting,handlertopostlisting,handlertoedit,handelertoupdate,handlertoviewspecfic,handelertodelete,handlertosearch,handlertonew}