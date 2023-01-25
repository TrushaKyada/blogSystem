const userModel = require("../model/user.model")
const bcrypt = require("bcrypt")
exports.userRegistration = async(req,res) => {
    try {
        const userdata = await userModel.findOne({email:req.body.email})
        if(userdata){
            console.log("dsds",userdata);
            res.status(403).json({
                msg:"already exist...!!",
                status:403
            })
        }
        else{
        const insertdata = new userModel({
            firstname:req.body.fname,
            lastname:req.body.lname,
            username:req.body.uname,
            email:req.body.email,
            mobile:req.body.mobile,
            gender:req.body.gender,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            zipcode:req.body.zipcode,
            userDesc:req.body.description,
            password:bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
        })
        const data = await insertdata.save()
        res.status(200).json({
            message:"registration successfully..!!!",
            data:data,
            status:200
        })
    }
    } catch (error) {
        res.status(500).json({
            message:"something went wrong..!!!",
            status:500
        })
    }
}

exports.userLogin = async(req,res)=>{
    try {
        const data = await userModel.findOne({email:req.body.email})
        if (data) {
            var id= data._id
            console.log(data);
            const token = await data.generateauthtoken()
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 300000 * 3),
                httpOnly: true
            })
                bcrypt.compare(req.body.password, data.password, (err, data) => {
                    // if (err) than throw error
                    if (err) throw err

                    //if both match than you can do anything
                    if (data) {
                        return res.status(200).json({
                            msg: "Login success",
                            status: 200,
                            token: token,
                            _id:id
                        })
                    } else {
                        return res.status(401).json({ msg: "Invalid credencial" })
                    }

                })
        } else {
            res.status(404).json(
                {
                    message: "USER NOT FOUND",
                    status: false,
                    code: 404,
                    statusCode: 0
                }
            )
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                message: "something went wrong..!!!",
                status: false,
                code: 500,
                statusCode: 0
            }
        )
    }
}

exports.userProfile = async(req,res)=>{
try {
    const data = await userModel.findById({_id:req.params.id})
    if(data){
        res.status(200).json({
            message:"success...!!!",
            data:data,
            status:200
        })
    }
    else{
        res.status(404).json(
            {
                message:"not found",
                status:404
            })
    }
} catch (error) {
    res.status(500).json(
        {
            message:"something went wrong",
            status:500
        })
}
}

exports.updateProfile = async(req,res) => {
    try {
        const data  = await userModel.findOne({_id:req.params.id})
        if(data){
            const updateData = await userModel.findByIdAndUpdate({_id:req.params.id},{
                $set:{
                    firstname:req.body.fname,
                    lastname:req.body.lname,
                    username:req.body.uname,
                    email:req.body.email,
                    mobile:req.body.mobile,
                    gender:req.body.gender,
                    city:req.body.city,
                    state:req.body.state,
                    country:req.body.country,
                    userDesc:req.body.description,
                    zipcode:req.body.zipcode                    
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
        res.status(500).json({
            msg:"something went wrong...!!",
            status:500
        })
    }
}
    exports.updatePassword = async(req,res)=>{
        try {
            const data = await userModel.findById({_id:req.params.id})
            if(data){
                const updatePassword = await userModel.findByIdAndUpdate({_id:req.params.id},
                    {$set:{
                        password:bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null)
                    }})
                res.status(200).json({
                    message:"password is changed successfully.....!!!!",
                    status:200
                })
            }
            else{
                res.status(404).json({
                    message:"not found",
                    status:404
                })
            }
        } catch (error) {
            res.status(500).json({
                msg:"something went wrong...!!",
                status:500
            })
        }
    }

exports.totalUser1 = async(req,res)=>{
    try {
        const data = await userModel.find()
        var d= data.length;
        if(data){
            res.status(200).json({
                message:"success...!!!",
                totalUser:d,
                status:200
            })
        }
        else{
            res.status(404).json(
                {
                    message:"not found",
                    status:404
                })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                message:"something went wrong",
                status:500
            })
    }
    }

    exports.userList = async(req,res)=>{
        try {
            const data = await userModel.find()
         
            if(data){
                res.status(200).json({
                    message:"success...!!!",
                    data:data,
                    status:200
                })
            }
            else{
                res.status(404).json(
                    {
                        message:"not found",
                        status:404
                    })
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(
                {
                    message:"something went wrong",
                    status:500
                })
        }
        }