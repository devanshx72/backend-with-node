const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    role:{
        type:String,
        trim:true,
        enum:["admin","user"],
        default:"user"
    }
})

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);
module.exports = User;