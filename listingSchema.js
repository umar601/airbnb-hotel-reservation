const joi = require("joi");
const review = require("./models/review");

const listSchema = joi.object({
    type:joi.string().required(),
    sellername:joi.string().required(),
    sellno:joi.string().required(),
    price:joi.number().required().min(0),
    location:joi.string().required(),
    description:joi.string().required(),
    images:joi.string(),
    status:joi.string().required(),
    city:joi.string().required(),
    review: joi.array().items(joi.string()),
});

module.exports = listSchema;
