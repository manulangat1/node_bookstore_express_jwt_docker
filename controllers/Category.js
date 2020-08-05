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
// DELETE /api/categories/:id
// @desc DELETE a category 
// @access PUBLIC 

exports.deleteCategory = async (req,res,next) => {
    try{
        id = req.params.id 
        const category = await Category.findById(id)
        if ( category){
            await  category.remove()
            return res.status(404).json({
                success:true,
                message:'Deletion Successful'
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