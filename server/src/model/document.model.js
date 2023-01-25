const mongoose = require("mongoose");       
const jwt = require("jsonwebtoken");

const document = mongoose.Schema({
    
    userId:{
        type:String,
        ref:'user' 
    },
    profile:{
        required: true,
        type: Array
    },
    
},{versionKey: false},{collection:"document"})

module.exports = mongoose.model("document", document)