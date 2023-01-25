// import commentModel from "../model/comment.model";
// import userModel from "../model/user.model";
// import blogModel from "../modle/blog.model";
const commentModel = require("../model/comment.model");
const blogModel = require("../model/blog.model");
const userModel = require("../model/user.model");
const documentModel = require("../model/document.model");

exports.insertComment = async (req, res) => {
    try {
        console.log("hfjhfdjik");
        const data = await commentModel.findOne({ user_id: req.params.id, blog_id: req.params._id })

        const userData = await userModel.findById({ _id: req.params.id })
        if (userData) {
            const blogdata = await blogModel.findById({ _id: req.params._id })
            if (blogdata) {
                const commentdata = new commentModel({
                    user_id: req.params.id,
                    blog_id: req.params._id,
                    username: userData.username,
                    comment: req.body.comment
                })
                const data = await commentdata.save();
                const a1 = await commentModel.find({ blog_id: req.params._id })
                var totalcomment = a1.length
                const comment = await blogModel.findByIdAndUpdate({ _id: blogdata._id }, {
                    $set: {
                        comment: totalcomment
                    }
                })
                res.status(200).json({
                    message: "comment inserted....!!!",
                    status: 200,
                    data: data
                })

            }
            else {
                res.status(200).json({
                    message: "blog not found...!!",
                    status: 404
                })
            }
        }
        else {
            res.status(404).json({
                message: "user not found...!!",
                status: 404
            })
        }
    
        
    } catch (err) {
    res.status(500).json({
        message: "something went wrong...!!",
        status: 500
    })
}
}
exports.updateComment = async (req, res) => {
    try {
        const data = await commentModel.findOne({ _id: req.params.id1 })

        if (data) {


            const blogdata = await blogModel.findById({ _id: req.params._id })
            if (blogdata) {
                const commentdata = await commentModel.findByIdAndUpdate({ _id: req.params.id1 }, {
                    $set: {
                        blog_id: req.params._id,
                        comment: req.body.comment
                    }

                })

                res.status(200).json({
                    message: "comment updated....!!!",
                    status: 20
                })

            }
            else {
                res.status(404).json({
                    message: "blog not found...!!",
                    status: 404
                })
            }

        }
        else {

            res.status(404).json({
                message: "not found...!!",
                status: 404
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "something went wrong...!!",
            status: 500
        })
    }
}
exports.viewComment = async (req, res) => {
    try {
        const data = await commentModel.find({ blog_id: req.params._id })
        var arr = []
        if (data[0]) {
            for (var i = 0; i < data.length; i++) {
                var a = data[i].user_id;
                // var b=a.toString().split(" ")[0];
                // console.log(b);
                const profile = await documentModel.findOne({ userId: a })

                var p1 = profile.profile[0].res;

                var obj = {
                    username: data[i].username,
                    profileimg: p1,
                    comment: data[i].comment
                }
                arr.push(obj)
            }
            console.log("arr", arr);
            res.status(200).json({
                message: "success...!!!",
                status: 200,
                data: arr
            })
        }
        else {
            res.status(404).json({
                message: "not found...!!!",
                status: 404
            })
        }
    } catch (error) {
        console.log("err", error);
        res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }
}
exports.viewCommentByUser = async (req, res) => {
    try {
        const data = await commentModel.find({ user_id: req.params.id, blog_id: req.params._id })
        if (data[0]) {
            res.status(200).json({
                message: "success...!!!",
                status: 200,
                data: data
            })
        }
        else {
            res.status(404).json({
                message: "not found...!!!",
                status: 404
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }
}
exports.viewCommentByUser = async (req, res) => {
    try {
        const data = await commentModel.find({ blog_id: req.params._id })
        if (data[0]) {

            res.status(200).json({
                message: "success...!!!",
                status: 200,
                data: data
            })
        }
        else {
            res.status(404).json({
                message: "not found...!!!",
                status: 404
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }
}

exports.totalcomment = async (req, res) => {
    try {
        const data = await commentModel.find({ user_id: req.params.id, blog_id: req.params._id })
        if (data[0]) {
            res.status(200).json({
                msg: "success",
                status: 200,
                data: data.length,

            })
        }
    } catch (error) {

    }
}