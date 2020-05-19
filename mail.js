const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
       
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, callback) => {
    const mailOptions = {
        from: email,
        to: 'ayush24das@gmail.com',
        subject,
        text
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data)
        }
    })
}

module.exports = sendMail;

