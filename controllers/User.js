const User = require('../models/User')

exports.registerUser = async(req,res,next) => {
    try{ 
        const { username,password,email,isAdmin } = req.body 
        const user = await User.create(req.body)
        const token = await user.generateAuthToken()
        return res.status(201).json({
            success:true,
            data:user,
            token
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
        console.log(`${req.body.email},${req.body.password}`)
        const { email,password } = req.body 
        const user = await User.findByCredentials(email, password)
        // const user = await User.findByCredentials(
        //     email,
        //     password
        // )
        console.log(`user:${user}`)
        const token = await user.generateAuthToken()
            return res.status(200).json({
                success:true,
                data:user,
                token
            })
    } catch (err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            error:'Internal Server Error'
        })
    }
}