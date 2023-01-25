const mongoose = require('mongoose');
const user = require('../model/user.model');
const blog = require('../model/blog.model');

const Comment = new mongoose.Schema({
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'blog'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    username: {
        type: String,
        required: true
    },
    comment: {
        type:String,
        required: true,
        default:0
    }
}, {
    timestamps: true
}, {
    collection: "comment"
}
);

module.exports = mongoose.model("comment", Comment);