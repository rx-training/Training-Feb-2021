const mongoose = require('mongoose');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity"); 

const {Department: User} = require('./departments');

//create schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: function() {
            return !this.isAdmin
        }
    }, 
    isAdmin: {
        type: Boolean,
        default: false
    }
});

//create class
const User = mongoose.model('User', userSchema);

//validate 
async function validate(user) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lasttName: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.passwordComplexity().required(),
        department: Joi.string(),
        isAdmin: Joi.boolean()
    });

    return await schema.validate(user);
}

//exports
module.exports = {
    User,
    validate
}