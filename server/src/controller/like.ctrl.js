const blogModel = require("../model/blog.model");
const likeModel = require("../model/like.model")
exports.insertLike = async (req, res) => {
    try {
        const data = await likeModel.findOne({ user_id: req.user._id, blog_id: req.params._id })
        const blogLike1 = await blogModel.findById({ _id: req.params._id })
        console.log("dsfd", data);
        if (data) {
            if (data.like == "0") {
                var like = parseInt(data.like) + 1;
                console.log("nknfgk", like);
                const updateLike = await likeModel.findByIdAndUpdate({ _id: data._id }, {
                    $set: {
                        like: like
                    }
                })

                var like1 = parseInt(blogLike1.blogLike) + 1;
                const updateBlog = await blogModel.findByIdAndUpdate({ _id: req.params._id }, {
                    $set: {
                        blogLike: like1
                    }
                })
                console.log("BLOGLIKE", like1);
                res.status(200).json({
                    message: "success",
                    status: 200,
                    like: like1
                })
            }
            else {
                var like = parseInt(data.like) - 1;
                console.log("nknfgk", like);
                const updateLike = await likeModel.findByIdAndUpdate({ _id: data._id }, {
                    $set: {
                        like: like
                    }
                })

                const blogLike1 = await blogModel.findById({ _id: req.params._id })
                var like3 = parseInt(blogLike1.blogLike) - 1;
                console.log("BLOGDATA: ", blogLike1);
                const updateBlog = await blogModel.findByIdAndUpdate({ _id: req.params._id }, {
                    $set: {
                        blogLike: like3
                    }
                })
                res.status(200).json({
                    message: "success",
                    status: 200,
                    like: like3
                })
            }

        }
        else {
            const likeModelData = new likeModel({
                user_id: req.user._id,
                blog_id: req.params._id,
                like: "1"
            })
            const likeData = await likeModelData.save();
            const blogLike1 = await blogModel.findById({ _id: req.params._id })
            var like3 = parseInt(blogLike1.blogLike) + 1;
            console.log("BLOGDATA: ", blogLike1);
            const updateBlog = await blogModel.findByIdAndUpdate({ _id: req.params._id }, {
                $set: {
                    blogLike: like3
                }
            })
            res.status(200).json({
                message: "success",
                status: 200,
                like: like3
            })
        }
    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "something went wrong",
            status: 500
        })
    }
}