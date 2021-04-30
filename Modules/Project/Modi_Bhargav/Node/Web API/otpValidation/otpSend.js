const nodemailer = require('nodemailer');

var OTP

class validateOTP {

  static createOTP(){
    var code = '0123456789';
    var otp = '';
    for(let i=1; i<=6; i++)
    {
      otp += code[Math.floor(Math.random() * 10)]
    }
    console.log(otp)
    return otp;
  }

  static sendOTP(email) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'modibhargav1998@gmail.com',
        pass: 'Bhai@267'
      }
    });

    OTP = this.createOTP()
    var mailOptions = {
      from: 'modibhargav1998@gmail.com',
      to: email,
      subject: 'Verify OTP',
      html: `<h1 style = "color:green;">Please Verify Your OTP:</h1><h2 style="color:black;">${OTP}</h2>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  static verifyOTP(ID) {
    if (OTP == ID) {
      return true;
    }
    else {
      return false;
    }
  }
}

module.exports = validateOTP