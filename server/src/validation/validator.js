const joi = require("@hapi/joi");
exports.validator=(schema,source)=>{
try {
    const {er} = schema.validate(req[source]);
    if(!er) return next();
    const {details} = error;
    const message = details
} catch (error) {
    console.log("error",error);
}
}