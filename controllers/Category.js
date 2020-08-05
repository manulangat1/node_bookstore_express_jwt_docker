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