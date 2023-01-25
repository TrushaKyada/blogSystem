const joi = require("@hapi/joi");

module.exports = {
    registration: joi.object().keys({
        firstname:joi.string().required(),
        lastname:joi.string().required(),
        username:joi.string().required(),
        email:joi.string().required(),
        mobile:joi.number().required().min(10).max(10),
        city:joi.string().required(),
        state:joi.string().required(),
        country:joi.string().required(),
        zipcode:joi.string().required(),
        password:joi.string().required(),
        userDesc:joi.string().required()
    })
}