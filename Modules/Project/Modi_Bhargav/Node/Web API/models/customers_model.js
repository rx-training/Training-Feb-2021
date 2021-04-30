const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    required: true
  },
  customerName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20
  },
  passWord:{
    type: String,
    required:true
  },
  Address: {
    type: String,
    required:true,
    minlength:2,
    maxlength:50
  },
  Email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email ex:abc@gmail.com"
    },
    required: [true, "Email required"]
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  }
})

const Customer = mongoose.model('customers', customerSchema)

module.exports = Customer
