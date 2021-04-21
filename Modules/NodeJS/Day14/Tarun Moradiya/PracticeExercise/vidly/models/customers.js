const Joi = require('joi');
const mongoose = require('mongoose');


//keep name of model singular
const Customer = mongoose.model('Customer', new mongoose.Schema({
    isGold: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    phone: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    }
  }))

  function validateCustomer(customer) {
    const schema = {
      name: Joi.string().min(5).max(50).required(),
      name: Joi.string().min(5).max(50).required(),
      name: Joi.boolean().required()
    };
  
    return Joi.validate(customer, schema);
  }

  module.exports = {Customer, validateCustomer};
