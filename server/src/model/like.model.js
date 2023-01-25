const mongoose = require('mongoose');
const user = require('../model/user.model');
const blog = require('../model/blog.model');

const like = new mongoose.Schema({
    blog_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'blog'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    like: {
        type:String,
        required: true
    }
}, {
    timestamps: true
}, {
    collection: "like"
}
);

module.exports = mongoose.model("like", like);