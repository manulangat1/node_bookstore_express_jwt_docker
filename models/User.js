const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Kindly input username"]
    },
    password:{
        type:String,
        required:[true,"Kindly input password"]
    },
    email:{
        type:String,
        required:[true,"Kindly input email"],
        unique:[true,"Email already in use"]
    },
    isAdmin:{
        type:Boolean,
        required:[true,"Please input isAdmin"],
        default:false
    }
})
module.exports = new mongoose.model('User',UserSchema)