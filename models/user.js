
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


let clientScehma = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },


})

clientScehma.plugin(passportLocalMongoose);


module.exports = mongoose.model("client",clientScehma);