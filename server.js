const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

//route imports
const books = require('./routes/Books')
const Category = require('./routes/Category')
// config dotenv for use 
dotenv.config({path:'./config/config.env'})

connectDB()
app = express()
// morgan logger
if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

// body parser
app.use(express.json())
app.use('/api/v1/books/',books)
app.use('/api/v1/categories/',Category)



//getting the port number 
const PORT = process.env.PORT

app.listen(PORT,console.log(`App is running in ${process.env.NODE_ENV} on port:${PORT}`.yellow.bold))