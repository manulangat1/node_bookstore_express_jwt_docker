const Category = require('../models/Category')


// GET ALL CATEGORIES
// @desc GET ALL /api/v1/categories/
// @access PUBLIC 
exports.getCategory = async(req,res,next) => {
    try{
        category = await Category.find()
        return res.status(200).json({
            success:true,
            count:category.length,
            data:category
        })
    } catch(err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            error:'Internal Server Error'  
        })
    }
}

// POST A CATEGORY /api/v1/categories/
// @desc POST CATEGORY
// @access PUBLIC 
exports.postCategory = async (req,res,next) => {
    try{
        const  { name }= req.body 
        const category = await Category.create(req.body)
        return res.status(201).json({
            success:true,
            data:category
        })
    } catch (err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            error:'Internal Server Error'  
        })
    }
}