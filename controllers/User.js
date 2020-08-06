const User = require('../models/User')
const auth = require('../middleware/isAuth')

//  POST /auth/v1/register/
// @desc POST 
// @access PUBLIC

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

//  POST /auth/v1/login/
// @desc POST 
// @access PUBLIC

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
// GET /auth/v1/userme/
// @desc POST 
// @access PRIVATE
exports.getUser =  async (req,res,next) => {
    try{
        // console.log(req.token)
        res.status(200).json({
            message:"Hey",
            user:req.user,
            token:req.token
        })
    }
    catch (err){
        res.status(401).json({
            error:"Unauthorised"
        })
    }
}