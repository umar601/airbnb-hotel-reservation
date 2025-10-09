const cloudinary = require("../cloudconnection");
const {CloudinaryStorage} = require("multer-storage-cloudinary");
const multer = require("multer");


const storage = new CloudinaryStorage({

  cloudinary:cloudinary,
  params:{
    folder:"airbnb_dev",
    allowed_formats:["png","jpeg","jpg","webp"]
  }

})


const uplaod = multer({storage});

module.exports = uplaod;