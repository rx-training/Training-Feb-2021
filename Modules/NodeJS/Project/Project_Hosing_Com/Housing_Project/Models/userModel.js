//import modules
const mongoose = require('mongoose')

//const config = require('config');
const jwt = require('jsonwebtoken');

//create schema
const userSchema = new mongoose.Schema({
  Full_Name: {
    type: String,
    required: true
  },
  Contact_no: {
    type: String,
    required: true
  },
  User_Email: {
    type: String,
    required: true
  }
});

userSchema.methods.generateAuthToken = ()=>{
  
  const token = jwt.sign({_id:this._id},config.get('jwtPrivatKey'))
  return token
}

//create model
const User = mongoose.model('User', userSchema)

//export model
module.exports = { User }