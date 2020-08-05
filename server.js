const express = require('express')
const morgan = require('morgan')
const colors = require('colors')
const path = require('path')
const dotenv = require('dotenv')

// config dotenv for use 
dotenv.config({path:'./config/config.env'})
app = express()

app.get('/', (req,res) => res.send("hello"))

if (process.env.NODE_ENV === "development"){
    app.use(morgan('dev'))
}

//getting the port number 
const PORT = process.env.PORT

app.listen(PORT,console.log(`App is running in ${process.env.NODE_ENV} on port:${PORT}`.yellow.bold))