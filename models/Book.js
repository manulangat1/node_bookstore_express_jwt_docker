const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Kindly input the title']
    },
    yom:{
        type:Date,
        required:[true,'Kindly input the Year of manufacture']
    },
    author:{
        type:String,
        required:[true,'Kindly input the author name']
    },
    price:{
        type:Number,
        required:[true,'Kindly input the price']
    },
    categories: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category"
        }
      ]

})

module.exports = mongoose.model('Book',BookSchema)