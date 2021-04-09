
const MoBike = require('./BikeRent')

const args = process.argv.slice(2)
const BikeNo = parseInt(args[0])
const PhoneNo = parseInt(args[1])
const Name = args[2]
const NoofDays = parseInt(args[3])

var MoBikeCharge = new MoBike(BikeNo,PhoneNo,Name,NoofDays)
    
console.log(`\n Name : ${MoBikeCharge.Name} \n BikeNo : ${MoBikeCharge.BikeNo} \n PhoneNumber : ${MoBikeCharge.PhoneNo} \n TotalDay : ${MoBikeCharge.NoofDays} \n TotalRent : ${MoBikeCharge.compute()}`)