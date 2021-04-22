const mongoose = require("mongoose")

const empschema = new mongoose.Schema({
    EmpId : {type: Number, required: true},
    Addressline : {type: String, required: true},
    Citizenshipid : {type: Number, required: true},
    Citizenshipstatus : {type: String, required: true},
    City : {type: String, required: true},
    Country : {type: String, required: true},
    DOB : {type: String, required: true},
    driverslicenseid : {type: String, required: true},
    driverslicenseexpirydate : {type: String, required: true},
    Fname : {type: String, required: true},
    Lname : {type: String, required: true},
    Mname : {type: String, required: true},
    Mstatus : {type: String, required: true, enum: ["S","M"]},
    Gender : {type: String, required: true, enum: ["M","F"]},
    Hiredate : {type: String, required: true},
    Homephonecountrycode : {type: String, required: true},
    HomephoneNo : {type: Number, required: true},
    Assignments : Array    
});
module.exports = mongoose.model("empsses" , empschema);
