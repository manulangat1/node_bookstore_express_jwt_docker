const Queue = require('bull')
const nodemailer = require('nodemailer')
const {sendmail}   = require('../emails/SendToMe')
const dotenv = require('dotenv')

// config dotenv for use 
dotenv.config({path:'../config/config.env'})

exports.sendMailAsync = (mail) => {
    const sendMailQueue = new Queue('sendMail',{
        redis:{
            host:'127.0.0.1',
            port:6379
        }
    })
    const options = {
        delay:400,
        attempts:2
    }
    from = process.env.EMAIL
    mail.from= from
    // console.log(mail)
    // adding a job to the queue 
    sendMailQueue.add(mail,options)
    //Consumer 
    return sendMailQueue.process(async job => {
        console.log(job.data)
        return await sendmail(job.mail)
    })

}