const blogModel = require("../model/blog.model");
const userModel = require("../model/user.model");
const commentModel = require("../model/comment.model")
const documentModel = require("../model/document.model");
const cloudinary = require("../middleware/util");
const likeModel = require("../model/like.model");
exports.insertBlog = async(req,res) => {
    try {


       
        const userData = await userModel.findById({_id:req.params.id})
       
        const splitDate = new Date();
               const d1=splitDate.toDateString().split(" ")[1];
               const d2 = splitDate.toDateString().split(" ")[2];
               const d3 = splitDate.toDateString().split(" ")[3];
               const d4 = []
               d4.push(d1,d2,d3);
                var date = d4.join(" ").toString();
         
        const insertdata = new blogModel({
            user_id:req.params.id,
            username:userData.username,
            blogTitle:req.body.title,
            blogDesc:req.body.desc,
            blogCategory:req.body.blogCategory,
            blogDate:date
        })
        const data = await insertdata.save()
        res.status(200).json({
            message:"Blog Detail Inserted....!!!",
            data:data,
            status:200
        })
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!",
            status:500
        })
    } 
}
exports.insertImg = async(req,res)=>{
try {
    console.log("vhjbdcfj");
    const cloudnaryImageUpload = async file => {
        return new Promise(reslove => {
            cloudinary.uploader.upload(file, (err, res) => {
             
                if (err) return err
                reslove({
                    res: res.secure_url
                })
            })
        })
    }
    const urls = []
    const files = req.files;
    console.log("req file:::", req.files);

    for (const file of files) {
        const { path } = file
        console.log("?????", path);

        const newPath = await cloudnaryImageUpload(path)
        console.log("new path:::::???", newPath);
        urls.push(newPath);
        console.log("Pushhh:::", urls.push());
    }
    const data = await blogModel.findByIdAndUpdate({_id:req.params.id}, {
        $set:{
            blogImage:urls
        }
    })
    res.status(200).json({
        message:"Blog Added..!!!",
        status:200
})
} catch (error) {
     console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!",
            status:500
        })
}
}
exports.updateLike = async(req,res) => {
    try {
        const data = await blogModel.findById({_id:req.params._id})
        if(data){
            var like = parseInt(data.blogLike) + 1;
            const increseLike = await blogModel.findByIdAndUpdate({_id:req.params._id},{$set:{
                blogLike:like
            }})
            res.status(200).json({
                msg:"success",
                status:200,
                data:like
            })
        }
        else{
        
            res.status(404).json({
                message:"data not found..!!!",
                status:500
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!",
            status:500
        })
    }
}
exports.updateBlog = async(req,res) => {
    try {
        const cloudnaryImageUpload = async file => {
            return new Promise(reslove => {
                cloudinary.uploader.upload(file, (err, res) => {
                    console.log("file");
                    if (err) return err
                    reslove({
                        res: res.secure_url
                    })
                })
            })
        }
        const urls = []
        const files = req.files;
        console.log("req file:::???", req.files);

        for (const file of files) {
            const { path } = file
            console.log("?????", path);

            const newPath = await cloudnaryImageUpload(path)
            console.log("new path:::::???", newPath);
            urls.push(newPath);
            console.log("Pushhh:::", urls.push());
        }

        const data = await blogModel.findOne({_id:req.params._id})
        if(data){
        const userData = await userModel.findById({_id:req.user._id})
        const splitDate = new Date();
        const d1=splitDate.toDateString().split(" ")[1];
        const d2 = splitDate.toDateString().split(" ")[2];
        const d3 = splitDate.toDateString().split(" ")[3];
        const d4 = []
        d4.push(d1,d2,d3);
         var date = d4.join(" ").toString();
         console.log(date);
            const updateData = await blogModel.findByIdAndUpdate({_id:req.params._id},{
                $set:{
                    user_id:req.user._id,
                    username:userData.username,
                    blogTitle:req.body.title,
                    blogDesc:req.body.desc,
                    blogImage:urls,
                    blogLike:req.body.like,
                    blogDate:date,
                    blogCategory:req.body.blogCategory              
                }
            })
            res.status(200).json({
                msg:"updated successfully...!!",
                status:200
            })
            
        }
        else{
            res.status(404).json({
                msg:"not found...!!",
                status:404
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:"something went wrong...!!",
            status:500
        })
    }
}
exports.viewBlog = async(req,res)=>{
    try {
       const data = await blogModel.find() 
       if(data[0]){
        res.status(200).json({
            message:"success..!!!!",
            data:data,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}
exports.viewBlogbycategory = async(req,res)=>{
    try {
       const data = await blogModel.find({blogCategory: req.query.category}) 
       if(data[0]){
        res.status(200).json({
            message:"success..!!!!",
            data:data,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}
exports.topviewBlog = async(req,res)=>{
    try {
       const data = await blogModel.find().limit(6) 
       if(data[0]){
        res.status(200).json({
            message:"success..!!!!",
            data:data,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}
exports.viewBlogByUser = async(req,res)=>{
    try {
       const data = await blogModel.find({user_id:req.params.id}) 
       const profile = await documentModel.findOne({user_id:req.params.id})
    //    var arr = []
    //   for(var i = 0;i<data.length;i++){
    //     const comment = await commentModel.find({blog_id:data[i]._id})
    //     arr.push(comment.length)
    //   }
       var p1 = profile.profile
    
       if(data[0]){
       var userData = req.user
        console.log(userData);
        res.status(200).json({
            message:"success..!!!!",
            data:data,
            userData:userData,
            profile:p1,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}
exports.countBlogByUser = async(req,res)=>{
    try {
       const data = await blogModel.find({user_id:req.params.id}) 
       if(data[0]){
        res.status(200).json({
            message:"success..!!!!",
            count:data.length,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}

exports.totalblog1 = async(req,res)=>{
    try {
       const data = await blogModel.find().sort({createdAt:1}) 
       if(data[0]){
        res.status(200).json({
            message:"success..!!!!",
            totalblog:data.length,
            status:200
        })
       }
       else{
        res.status(404).json({
            message:"not found..!!!!",
            status:404
        })
       }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}

exports.viewBlogById = async(req,res)=>{
    try {
        const data = await blogModel.findById({_id:req.params.id1})
        if(data){
            const udata = await userModel.findById({_id:data.user_id})
            const profile = await documentModel.findOne({user_id:data.user_id})
        
            res.status(200).json({
                message:"success..!!!",
                status:200,
                data:data,
                userData:udata,
                profile:profile,
                
            })
        }
        else{
            res.status(404).json({
                message:"not found..!!!",
                status:404
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"something went wrong..!!!!",
            status:500
        })  
    }
}