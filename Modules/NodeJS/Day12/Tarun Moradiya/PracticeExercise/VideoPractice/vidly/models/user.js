const Joi = require('joi');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const config = require('config')

//create schema
const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
  },
  email: {
      type: String,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 255
  }, 
  password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
  },
  isAdmin: Boolean
})

  //Information expert principle    
  userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'));
    return token

  }


//keep name of model singular
const User = mongoose.model('User', userSchema)


  function validateUser(user) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password:Joi.string().min(2).max(255).required(),
      isAdmin: Joi.boolean()
    };
  
    return Joi.validate(user, schema);
  }

exports.User = User;
exports.validate = validateUser;