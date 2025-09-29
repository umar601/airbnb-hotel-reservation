const moongoose = require("mongoose");

const reviewSchema = moongoose.Schema({

    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

module.exports = moongoose.model("review",reviewSchema);