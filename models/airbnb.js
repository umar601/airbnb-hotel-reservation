const mongoose = require("mongoose");

// async function main() {

//     await mongoose.connect("mongodb://127.0.0.1:27017/airbnb");
    
// }

// main()
// .then(()=>{
//     console.log("connected successfully of model");
// })
// .catch((err)=>{

//     console.log(err);
// })


const airbnbSchema = mongoose.Schema(

    {
        type:{
            type:String,
            required:true,
        },
        sellername:{
            type:String,
            required:true,
        },
        sellno:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        location:{
            type:String,
            required:true,
        },
        description:{
            type:String,
        },
        images:{
            type:Array,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
       review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "review"
  }]

    }
)


module.exports = mongoose.model("user",airbnbSchema);
