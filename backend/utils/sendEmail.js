const nodemailer = require('nodemailer')
const dns = require('dns')

const transporter = nodemailer.createTransport({
    host : 'smtp.gmail.com',
    port : 465,
    secure : true,
    
    auth : {
        user : process.env.EMAIL_USER,
        pass : process.env.EMAIL_PASS
    },

        lookup: (hostname, options, callback) => {
        dns.lookup(hostname, { family: 4 }, callback)
    }
})
 async function sendEmail(to, subject , text){
    try{
       const info = await transporter.sendMail({
            from : process.env.EMAIL_USER,
            to : to,
            subject : subject ,
            text : text
    
    }) 
        console.log("email sent",info.response)
    }catch(e){
        console.error(e)
    }
}
module.exports = sendEmail