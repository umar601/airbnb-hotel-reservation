const express = require("express");

const router = express.Router();

const uplaod = require("../middlewares/upload");

const { hadlertogetalllisting,handlertopostlisting,handlertoedit,handelertoupdate,handlertoviewspecfic,handelertodelete,handlertosearch,handlertonew,handlerToAddReview,handlerToDeleteReview} = require("../controllers/controller");

const listSchema = require("../listingSchema");

const validateListing = (req, res, next) => {
  const { error } = listSchema.validate(req.body);

  if (error) {
    const message = error.details.map(el => el.message).join(", ");
    return res.status(400).render("error", { message });
  }

  next(); // only call next if no validation error
};

function asyncWrap(fun){

    return function(req,res,next){
        fun(req,res,next).catch((err)=>{
            next(err);
        })
    }
}


const loginuser = (req,res,next)=>{

    if(!req.isAuthenticated()){
      req.session.url = req.originalUrl;
      // console.log(req.session.url);
      return res.redirect("/user/login");
    }
    // console.log("e")
    return next()
}


router.route("/")

.get(asyncWrap(hadlertogetalllisting))

.post(loginuser,uplaod.array('images',10),asyncWrap(handlertopostlisting))

router.get("/new",loginuser,asyncWrap(handlertonew))


router.route("/:id")

.get(loginuser,asyncWrap(handlertoedit))

.patch(loginuser,validateListing,asyncWrap(handelertoupdate))

.delete(loginuser,asyncWrap(handelertodelete))


router.get("/view/:id",asyncWrap(handlertoviewspecfic))


router.post("/search",asyncWrap(handlertosearch))

router.post("/:id/review",loginuser,asyncWrap(handlerToAddReview));

router.delete("/:postid/review/:reviewid",loginuser,asyncWrap(handlerToDeleteReview));


module.exports = router;

