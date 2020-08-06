const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
// config dotenv for use 
dotenv.config({path:'./config/config.env'})
console.log(process.env.EMAIL)
const transport = {
    // all the config to make a site send an email
    service:'gmail',
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    // PLAIN:true,
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}
//transporter function 
const transporter = nodemailer.createTransport(transport)
transporter.verify((error,success) => {
    if(error){
        console.error(error)
    } else{
        console.log('user ready to mail')
    }
})

// const mailDetails = {
//     from:process.env.EMAIL,
//     // to:`${email}`,
//     subject:`${subject}`,
//     text:`${text}`
// }
const mail = {
    from:process.env.EMAIl,
    to:"langatfarmer@gmail.com",
    subject:"hey you",
    text:"body"
}


transporter.sendMail(mail,(err,data) => {
    if(err){
        console.error(err)
        // res.json({
        //     status:'fal'
        // })
    } else{
        console.log("Sent successfully".green.bold)
        // res.json({
        //     status:success
        // })
    }
})
module.exports = transporter