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


router.route("/")

.get(asyncWrap(hadlertogetalllisting))

.post(validateListing,uplaod.array('images',10),asyncWrap(handlertopostlisting))

router.get("/new",asyncWrap(handlertonew))


router.route("/:id")

.get(asyncWrap(handlertoedit))

.patch(validateListing,asyncWrap(handelertoupdate))

.delete(asyncWrap(handelertodelete))


router.get("/view/:id",asyncWrap(handlertoviewspecfic))


router.post("/search",asyncWrap(handlertosearch))

router.post("/:id/review",asyncWrap(handlerToAddReview));

router.delete("/:postid/review/:reviewid",asyncWrap(handlerToDeleteReview));


module.exports = router;

