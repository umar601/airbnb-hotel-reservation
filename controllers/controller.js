
const { signedCookie } = require("cookie-parser");
const user = require("../models/airbnb");
const review = require("../models/review");


async function hadlertogetalllisting(req,res){

    let allDetails = await user.find();
    let title = "air bnb";
    res.cookie("name","umar",{signed:true,maxAge:24*60*60*1000});
    // req.session.name="umar";
    

    // if(req.session.count){
    // req.session.count++;
    // }else{
    // req.session.count=0;
    // }

    // console.log(req.session.count);

    // console.log(req.session);

    //output  cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }
// }
    
    //maxage id expire of cookie and its in mili second

    // console.log(req.signedCookies);  //for signed
    // console.log(req.cookies); //for simple


    res.render("home",{allDetails,title,message:req.flash("success")});
}


async function handlertopostlisting(req,res,next){
    let imageUrls = [];

    req.flash("success","Listing posted successfully!")

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
    })

    await newuser.save().then((res)=>{
        console.log(res)
    })

    res.redirect("/hotel")

   

}

async function handlertoedit(req,res){


    let {id} = req.params;

    let data = await user.findById(id);

    res.render("edit",{data});

}


async function handelertoupdate(req,res,next){

    req.flash("success","Listing updated successfully!")

    let {id} = req.params;
    // console.log("update")

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

    let data = await user.findById(id).populate("review");

    res.render("view",{data,message:req.flash("success")});

}

async function handelertodelete(req,res){

    req.flash("success","Listing deleted successfully!")

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


async function handlerToAddReview(req,res) {

    req.flash("success","review posted successfully!")

    let {id} = req.params;

    let { rating,comment } = req.body;

    let listing = await user.findById(id);

    let newReview = new review({

        rating:rating,
        comment:comment,
        createdBy:"umar"
    })

    await newReview.save();
    listing.review.push(newReview);
    await listing.save();

    console.log("list",listing);
    res.redirect(`/hotel/view/${id}`)
    
}


async function handlerToDeleteReview(req,res){


    req.flash("success","review delteted successfully!")

    let { postid,reviewid } = req.params;

    await review.findByIdAndDelete(reviewid)
       await user.findOneAndUpdate(
        { _id: postid },                  
        { $pull: { review: reviewid } }   
    );

    res.redirect(`/hotel/view/${postid}`)

}




module.exports = {hadlertogetalllisting,handlertopostlisting,handlertoedit,handelertoupdate,handlertoviewspecfic,handelertodelete,handlertosearch,handlertonew,handlerToAddReview,handlerToDeleteReview}