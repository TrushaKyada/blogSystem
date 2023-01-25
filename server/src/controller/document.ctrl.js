const document = require("../model/document.model");
const cloudinary = require("../middleware/util");
exports.register = async (req, res) => {
    try {
        const cloudnaryImageUpload = async file => {
            return new Promise(reslove => {
                cloudinary.uploader.upload(file, (err, res) => {
                    console.log("file", file);
                    if (err) return err
                    reslove({
                        res: res.secure_url
                    })
                })
            })
        }
        const urls = []
        const files = req.files;
        console.log("res file:::???", req.files);

        for (const file of files) {
            const { path } = file
            console.log("?????", path);

            const newPath = await cloudnaryImageUpload(path)
            console.log("new path:::::???", newPath);
            urls.push(newPath);
            console.log("Pushhh:::", urls.push());
        }

        const authData = new document({
            profile: urls,
            userId:req.params.id
        })
        const saveData = await authData.save()
        console.log("save data???", saveData);

        res.status(201).json({
            message: "register succefully",
            status: true,
            code: 201,
            data: saveData
        })
    } catch (error) {
        console.log("+++", error);
        res.status(500).json(
            {
                message: "someting went wrong",
                status: false,
                code: 500
            }
        )
    }
}

exports.viewDocument = async(req,res)=>{
    try {
        const data = await document.findOne({userId:req.params.id})
        if(data){
            res.status(200).json({
                status:200,
                data:data
            })
        }
       else{
        res.status(404).json({
            status:404,
            message:"not found"
        })
       }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:"something went wrong"
        })
    }
}
