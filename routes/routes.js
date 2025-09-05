const express = require("express");

const router = express.Router();

const uplaod = require("../middlewares/upload");

const user = require("../models/airbnb")

const { hadlertogetalllisting,handlertopostlisting,handlertoedit,handelertoupdate,handlertoviewspecfic,handelertodelete,handlertosearch,handlertonew} = require("../controllers/controller");

router.route("/")

.get(hadlertogetalllisting)

.post(uplaod.array('images',10),handlertopostlisting)

router.get("/new",handlertonew)


router.route("/:id")

.get(handlertoedit)

.patch(handelertoupdate)

.delete(handelertodelete)


router.get("/view/:id",handlertoviewspecfic)


router.post("/search",handlertosearch)


module.exports = router;

