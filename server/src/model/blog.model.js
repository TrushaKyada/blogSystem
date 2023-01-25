const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const blog = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    username: {
        type: String,
        required: true
    },
    blogTitle:{
        required: true,
        type: String
    },
    blogDesc:{
        required:true,
        type:String
    },
    blogImage:{
       
        type:Array
    },
    blogLike:{
   
        type:String,
        required:true,
        default:0
    },
    blogDate:{
        required:true,
        type:String
    },
    blogCategory:{
        required:true,
        type:String
    },
    comment:{
        required:true,
        type:String,
        default:0
    }
},{timestamps:true},{versionKey: false},{collection:"blog"})

module.exports = mongoose.model("blog", blog)