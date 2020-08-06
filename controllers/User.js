const User = require('../models/User')

exports.registerUser = async(req,res,next) => {
    try{ 
        const { username,password,email,isAdmin } = req.body 
        const user = await User.create(req.body)
        return res.status(201).json({
            success:true,
            data:user
        })
    } catch(err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}

exports.loginUser = async (req,res,next) => {
    try{
        const { username,password } = req.body 
        const user = await User.findOne({
            username:username,
            password:password
        })
        if (user){
            return res.status(200).json({
                success:true,
                data:user
            })
        }
    } catch (err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}