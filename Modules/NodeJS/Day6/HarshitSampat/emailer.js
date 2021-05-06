var nodemailer =require('nodemailer')
var transporter =nodemailer.createTransport({
    service :'gmail',
    auth:{
        user:'sampatharshit03@gmail.com',
        pass:'nhy@7531'
    }
});
var mailOption ={
    from :'sampatharshit03@gmail.com',
    to:'170120116082@git.org.in',
    subject:'Sending mail through  nodejs',
    text : 'It was ann easay'
}

transporter.sendMail(mailOption,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log('Email sent: '+info.response);
    }
});