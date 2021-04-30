const Customer = require('../models/customers_model')
const Trip = require('../models/trip_model')
const express = require("express");
const cusTripsRouter = express.Router({ mergeParams: true });

class customerTrip {
  static async custripFind(req, res) {

    const ID = parseInt(req.params.id)
    const selectData = await Customer.find({ customerId: ID }).select('-__v')
    if (selectData.length == 0) return res.status(404).send("Your Id Is Not Avilable")

    const tripDetails = await Trip.find()
    var customerData = []
    for (var i of tripDetails) {
      // console.log(i)
      if (i.customerId == ID) {
        const tripData = await Trip.find({ tripId: i.tripId })
        customerData.push(tripData)
      }
    }
    if (customerData.length == 0) return res.status(404).send("Not a Any Trip details Avilable")

    res.send(customerData)
  };
};

cusTripsRouter.get('/', customerTrip.custripFind)

module.exports = cusTripsRouter
