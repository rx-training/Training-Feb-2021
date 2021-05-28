const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  stdId: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 10
  },
  Address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  },
  Fees: {
    Amount: {
      type: Number,
      required: true,
      min:5000,
      max:20000,
      default:10000
    },
    PaymentDate: {
      type: Date,
      default: Date.now
    },
    Status: {
      type: Boolean,
      required: true
    }
  },
  Result: {
    Hindi:{
      type:Number,
      required: true,
      minlength:2,
      maxlength:3,
    },
    Eng: {
      type:Number,
      required: true,
      minlength:2,
      maxlength:3
    },
    Math: {
      type:Number,
      required: true,
      minlength:2,
      maxlength:3
    },
    Total: {
      type:Number,
      required: true,
      maxlength:3
    },
    Grade: {
      type:String,
      required: true
    }
  }
})

const Student = mongoose.model('Students', studentSchema)

module.exports = Student