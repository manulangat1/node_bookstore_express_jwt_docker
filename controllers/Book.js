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
        const { title,yom,author,price,category } = req.body
        const book = await Book.create({ title,yom,author,price })
        if (category.length > 0){
            console.log("hey")
            await book.categories.push(category)
        }
        console.log(book)
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

// /api/v1/books/:id
// @desc DELETE book
// @access PUBLIC
exports.deleteBook = async (req,res,next) => {
    try{
        const id = req.params.id 
        const book = await Book.findById(id)
        if(book){
            await book.remove()
            return res.status(404).json({
                success:true,
                // count:books.length,
                message:'Delete sucessfully'
            })
        }
    } catch (err){
        console.log(`Error:${err}`)
        return res.status(500).json({
            success:false,
            // count:books.length,
            error:'Internal Server Error'
        })
    }
}