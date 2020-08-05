const Book = require('../models/Book')

// /api/v1/books/
// @desc GET All Books 
// @access PUBLIC
exports.getBooks = async (req,res,next) => {
    try{
        const books = await Book.find()
        // console.log(books)
        return res.status(200).json({
            success:true,
            count:books.length,
            data:books
        })
    } catch(err){
        console.log(`err:${err}`)
        return res.status(500).json({
            success:false,
            // count:books.length,
            error:'Internal Server Error'
        })
    }
}
// /api/v1/books/
//@desc POST a book 
// @access PUBLIC 

exports.postBook = async (req,res,next) => {
    try{
        const { title,yom,author,price } = req.body
        const book = await Book.create(req.body)
        return res.status(201).json({
            success:true,
            // count:book.length,
            data:book
        })
    } catch (err){
        console.log(err)
        return res.status(500).json({
            success:false,
            // count:books.length,
            error:'Internal Server Error'
        })
    }
}