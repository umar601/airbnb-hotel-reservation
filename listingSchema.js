const joi = require("joi");
const review = require("./models/review");

const listSchema = joi.object({

    liting:joi.object({
        type:joi.string().required(),
        sellername:joi.string().required(),
        sellno:joi.string().required(),
        price:joi.number().required().min(0),
        location:joi.string().required(),
        description:joi.string().required(),
        images:joi.string().required(),
        status:joi.string().required(),
        city:joi.string().required(),
        review:joi.string().required(),

    }).required()


})


module.exports = listSchema;