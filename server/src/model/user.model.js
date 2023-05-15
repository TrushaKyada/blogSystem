const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
    firstname:{
        required: true,
        type: String
    },
    lastname:{
        required: true,
        type: String
    },
    username:{
        required: true,
        type: String
    },
    email:{
        required:true,
        type:String
    },
    mobile:{
        required:true,
        type:String
    },
    gender:{
        required:true,
        type:String
    },
    city:{
        required:true,
        type:String
    },
    state:{
        required:true,
        type:String
    },
    country:{
        required:true,
        type:String
    },
    zipcode:{
        required:true,
        type:Number
    },
    password:{
        required:true,
        type:String
    },
    userDesc:{
        required:true,
        type:String
    },
    tokens: {
            type: String,
            require: true
        }
    
},{timestamps:true},{versionKey: false},{collection:"user"})

userSchema.methods.generateauthtoken = async function (res) {
    try {
        const t = jwt.sign({ _id: this._id.toString() }, SECRET_KEY)
        this.tokens = t
        await this.save();
        return t;
    }
    catch (err) {
        res.send(err)
    }
}

module.exports = mongoose.model("user", userSchema)
