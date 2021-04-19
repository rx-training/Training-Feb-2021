// import modules
const Joi = require('joi');
const mongoose = require('mongoose');



//create schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: Boolean
});

userSchema.method.getAuthToken = function() {
    token = jwt.sign(
        {
            email: this.email,
            isAdmin: this.isAdmin
        },
        config.get('secretKey'),
        {
            algorithm: config.get('algorithm'),
            expiresIn: '50m'
        }
    )
}

function validateUser(user) {
    const schema = {
      name: Joi.string().min(2).max(50).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password:Joi.string().min(2).max(255).required(),
      isAdmin: Joi.boolean()
    };
  
    return Joi.validate(user, schema);
  }

//create class model
const User = mongoose.model('User', userSchema)

// exports
module.exports = {User, validateUser};