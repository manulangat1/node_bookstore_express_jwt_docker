const jwt = require('jsonwebtoken')
const User = require('../models/User')

const auth = async (req,res,next) => {
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const data = jwt.verify(token,process.env.JWT_KEY)
        const user = await User.findOne({_id:data._id,'tokens.token':token})
        // console.log(`user:${user}`)
        if (!user){
            res.status(401).json({
                error:"Unauthorised"
            })
        }
        req.user = user 
        req.token = token 
        next()
    } catch (err){
        res.status(401).json({
            error:"Unauthorised"
        })
        // process.exit(1)
    }
}
module.exports = auth