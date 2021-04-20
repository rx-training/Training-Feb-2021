// import modules
const Joi = require('joi');
const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');


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

//create method

userSchema.methods.getAuthToken = function() {
    const token = jwt.sign(
        {
            _id: this._id,
            email: this.email,
            isAdmin: this.isAdmin
        },
        config.get('secretKey'),
        {
            algorithm: config.get('algorithm'),
            expiresIn: '50m'
        }
    );
    return token;
}

//create class model
const User = mongoose.model('User', userSchema);

//validate user from input

async function validateUser(user) {
    try {
        const schema = {
            name: Joi.string().min(2).max(50).required(),
            email: Joi.string().min(5).max(255).required().email(),
            password:Joi.string().min(2).max(255).required(),
            isAdmin: Joi.boolean()
          };
        
          return await Joi.validate(user, schema);
    } catch (err) {
        console.error(err)
    }
  }



// exports
module.exports = {User, validateUser};