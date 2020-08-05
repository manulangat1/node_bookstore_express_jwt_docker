const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please input ccategory name']
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = new mongoose.model('Category',CategorySchema)