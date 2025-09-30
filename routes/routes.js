const express = require("express");

const router = express.Router();

const uplaod = require("../middlewares/upload");

const user = require("../models/airbnb")

const { hadlertogetalllisting,handlertopostlisting,handlertoedit,handelertoupdate,handlertoviewspecfic,handelertodelete,handlertosearch,handlertonew,handlerToAddReview} = require("../controllers/controller");

function asyncWrap(fun){

    return function(req,res,next){
        fun(req,res,next).catch((err)=>{
            next(err);
        })
    }
}


router.route("/")

.get(asyncWrap(hadlertogetalllisting))

.post(uplaod.array('images',10),asyncWrap(handlertopostlisting))

router.get("/new",asyncWrap(handlertonew))


router.route("/:id")

.get(asyncWrap(handlertoedit))

.patch(asyncWrap(handelertoupdate))

.delete(asyncWrap(handelertodelete))


router.get("/view/:id",asyncWrap(handlertoviewspecfic))


router.post("/search",asyncWrap(handlertosearch))

router.post("/:id/review",asyncWrap(handlerToAddReview));


module.exports = router;

