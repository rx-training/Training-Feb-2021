const mongoose = require("mongoose")

const empschema = new mongoose.Schema({
    EmpId : Number,
    Addressline : String,
    Citizenshipid : Number,
    Citizenshipstatus : String,
    City : String,
    Country : String,
    DOB : String,
    driverslicenseid : String,
    driverslicenseexpirydate : String,
    Fname : String,
    Lname : String,
    Mname : String,
    Mstatus : String,
    Gender : String,
    Hiredate : String,
    Homephonecountrycode : String,
    HomephoneNo : Number,
    Assignments : Array    
});
module.exports = mongoose.model("empsses" , empschema);
