const nodemailer = require("nodemailer")

async function Email(toemail,otp) {
  //step:1
  let transporter = nodemailer.createTransport({
    pool: true,
    service: "gmail",
    tls: {
      rejectUnauthorized: false
    },
    secure: false,
    auth: {
        user: "jayc20110@gmail.com",
        pass: "jaykant@32"
    }
  });


  //step:2
  let mailOptions = {
    from: "jayc20110@gmail.com",
    to: toemail,
    subject: "testing",
    text: otp
  };


  //step:3
  await transporter.sendMail(mailOptions, function(err, data){
    if(err){
        console.log("error",err)
    }
    else{
        console.log("Email sent!!!!")
    }
  })

}

// var mail = "pkgohil7698435117@gmail.com"
// var otp = Math.floor(1000 + Math.random() * 9000).toString()
// Email(mail,otp)
module.exports = Email

// async function main() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//    // let testAccount = await nodemailer.createTestAccount();
  
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: "jayc20110@gmail.com", // generated ethereal user
//         pass: "jaykant@32", // generated ethereal password
//       },
//     });
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//         from: "jayc20110@gmail.com",
//         to: "pkgohil7698435117@gmail.com",
//         subject: "testing",
//         text: "IT Works",
//         html: "<b>Hello world?</b>", // html body
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   }
  
//   main().catch(console.error);