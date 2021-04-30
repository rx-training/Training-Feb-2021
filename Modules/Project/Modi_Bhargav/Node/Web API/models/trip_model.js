const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  customerId: {
    type: Number,
    required: true
  },
  tripId: {
    type: Number,
    required: true
  },
  dateTime: {
    type: Date,
    default: Date.now
  },
  Source: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  Destination: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  carType2: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  Distance: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 3
  },
  fareDetails: {
    type: Number,
    required: true,
    minlength: 2,
    maxlength: 4
  },
  paymentType: {
    type: String,
    required: true,
  },
  carId: {
    type: Number,
    required: true
  }
})

const Trip = mongoose.model('trip', tripSchema)

module.exports = Trip
