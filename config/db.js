const mongoose = require('mongoose')


const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log(`MongoDB connect on host:${conn.connection.host}`.cyan.underline)
    } catch(err){
        console.log(`Error ${err}`)
        process.exit(1)
    }
}
module.exports = connectDB