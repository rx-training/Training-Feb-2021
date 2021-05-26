const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Project', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to Student MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const studentSchema = new mongoose.Schema({
  stdId: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  Fees: {
    Amount: {
      type: Number,
      required: true
    },
    PaymentDate: {
      type: Date,
      required: true
    },
    Status: {
      type: Boolean,
      required: true
    }
  },
  Result: {
    Hindi:{
      type:Number,
      required: true
    } ,
    Eng: {
      type:Number,
      required: true
    },
    Math: {
      type:Number,
      required: true
    },
    Total: {
      type:Number,
      required: true
    },
    Grade: {
      type:String,
      required: true
    }
  }
})

const Student = mongoose.model('Students', studentSchema)

module.exports = Student