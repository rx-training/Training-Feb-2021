const Driver = require('../models/Drivers_model')
const Trip = require('../models/trip_model')
const Car = require('../models/cars_model')
const express = require("express");
const drivertripRouter = express.Router({ mergeParams: true });


class DriverTrip {
  static async drivertripFind(req, res) {

    const ID2 = parseInt(req.params.id)
    const selectData = await Driver.find({ driverId: ID2 }).select('-__v')
    if (selectData.length == 0) return res.status(404).send("Your Drivers Data Is Not Found")

    const tripDetails = await Trip.find()
    var tripData = []
    for (var i of tripDetails) {
      const carDetail = await Car.find({ carId: i.carId })
        .populate('driverData')
      for (var j of carDetail) {
        if (j.driverData.driverId == ID2) {
          const tripDetail = await Trip.find({tripId:i.tripId})
          tripData.push(tripDetail)
        }
      }
    }
    if (tripData.length == 0) return res.status(404).send("No Trip By driver")

    res.send(tripData)
  }
}

drivertripRouter.get('/', DriverTrip.drivertripFind)

module.exports = drivertripRouter

