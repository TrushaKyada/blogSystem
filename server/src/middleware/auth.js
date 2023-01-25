// import userModel from "../model/user.model";
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken")
exports.verify = async(req,res,next)=>{
console.log("dfdnk");
    const Token = req.headers['authorization']
    console.log("asas",Token);
    if(Token){
       
        const decoded = jwt.verify(Token, "iamtrushakyada");
     
        const data = await userModel.findById({_id:decoded._id})
        req.user = data
       
        next();

    }
    else{
        console.log("forbidden");
        res.status(403).json({
            message:"forbidden",
            status:403
        })
    }
}