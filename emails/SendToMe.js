const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
// config dotenv for use 
dotenv.config({path:'./config/config.env'})
exports.sendmail = async (mail) => {
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
    const transporter = await nodemailer.createTransport(transport)
    await transporter.verify((error,success) => {
        if(error){
            console.error(error)
        } else{
            console.log('user ready to mail')
        }
    })

    const mails = {
        from:process.env.EMAIL,
        to:`${mail.to}`,
        subject:`${mail.subject}`,
        text:`${mail.text}`
    }
    // console.log(mails)
    return await transporter.sendMail(mails,(err,data) => {
        if(err){
            console.error(err)
        } else{
            console.log("Sent successfully".green.bold)
        }
    })
}
// module.exports = sendmail