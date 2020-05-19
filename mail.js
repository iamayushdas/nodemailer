const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'e2c5ffd45317594ee70882da30d616d9-e5e67e3e-1a8a3004',
        domain: 'sandbox7c1a87604bf8433780dd24d7ba0d83b5.mailgun.org'
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

