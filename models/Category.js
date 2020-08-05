const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please input ccategory name']
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    books: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Book"
        }
      ]
})
module.exports = new mongoose.model('Category',CategorySchema)