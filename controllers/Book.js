const Book = require('../models/Book')

// /api/v1/books/
// @desc GET All Books 
// @access PUBLIC
exports.getBooks = async (req,res,next) => {
    try{
        const books = await Book.find()
        console.log(books)
        return res.status(200).json({
            success:true,
            count:books.length,
            data:books
        })
    } catch(err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:true,
            // count:books.length,
            error:'Internal Server Error'
        })
    }
}