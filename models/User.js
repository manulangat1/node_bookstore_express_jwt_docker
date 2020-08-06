const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Kindly input username"]
    },
    password:{
        type:String,
        minlength:7,
        required:[true,"Kindly input password"]
    },
    email:{
        type:String,
        required:[true,"Kindly input email"],
        unique:[true,"Email already in use"],
        validate: value => {
            if (!validator.isEmail(value)){
                throw new Error({error:'Invalid Email Address'})
            }
        }
    },
    isAdmin:{
        type:Boolean,
        required:[true,"Please input isAdmin"],
        default:false
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})
UserSchema.pre('save', async function (next){
    //hash the password before saving the user 
    const user = this 
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
})
UserSchema.methods.generateAuthToken = async function(){
    //Generate an auth token for the user 
    const user = this 
    const token = jwt.sign({_id:user._id},process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
UserSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}
const User = new mongoose.model('User',UserSchema)
module.exports = User