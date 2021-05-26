const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/instagram',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));    */


const userSchema = new mongoose.Schema({
    userID : {
        type : String,
        required : true
    },
    userPWD : {
        type : String,
        required : true
    },
    userName :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    phoneNO : {
        type : Number,
        validate: {
          validator: function(v) {
              return /\d{10}/.test(v);
          },
          message: '{VALUE} is not a valid 10 digit number!'
        },
        required : true 
    }
})


const user = mongoose.model('userAccount',userSchema)
module.exports = user

async function addUser(){

    const d1 = new user ({
        userID : 'jinal_shah__',
        userPWD : 'jks75',
        userName : 'jks',
        email : 'jks@gmail.com',
        location : 'Ahmedabad',
        dateOfBirth : '1999-05-07',
        gender : 'female',
        phoneNO : 9100063529
    });
    
    try{
        const result = await d1.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message)
    }    
} 

//addUser()

/*
{
        "userID" : "shweta_",
        "userPWD" : "ps719",
        "userName" : "pathak shweta",
        "email" : "ps7@gmail.com",
        "location" : "gandhinagar",
        "dateOfBirth" : "1998-07-29",
        "gender" : "female",
        "phoneNO" : 9134843529
}

*/

/*

        userID : '__dk_vyasa',
        userPWD : 'dk11',
        userName : 'Dhruti',
        email : 'dkvyasa@gmail.com',
        location : 'Ahmedabad',
        dateOfBirth : Date(),
        gender : 'female',
        phoneNO : 9134843529

*/
