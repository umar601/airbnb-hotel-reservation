
const Joi = require("joi");

const userSchema = Joi.object({
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});

module.exports = userSchema;
