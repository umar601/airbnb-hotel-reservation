const moongoose = require("mongoose");

const reviewSchema = moongoose.Schema({

    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    comment:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now

    },
    createdBy:{
        type:String,
        required:true

    }
})

module.exports = moongoose.model("review",reviewSchema);