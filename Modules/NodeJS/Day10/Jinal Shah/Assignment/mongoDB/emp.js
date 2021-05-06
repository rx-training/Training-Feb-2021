const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/StudentData',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)

const employeeSchema = new mongoose.Schema({
    ID : Number,
    Name : String,
    HireDate : Date,
    PhNo : Number,
    City : String,
    Assignments : Array
})

const employee = mongoose.model('employee' , employeeSchema)

module.exports = employee


/*

{
    "ID" : 1,
    "Name" : "Veer",
    "HireDate" : "2020-01-01",
    "PhNo" : 123897563,
    "City" : "AHMdabad",
    "Assignments" : {
        "AID" : 11,
        "Name" : "routing",
        "Status" : "complete"
    },{
        "AID" : 12,
        "Name" : "routing",
        "Status" : "partial complete"
    },
    {
        "AID" : 13,
        "Name" : "routing",
        "Status" : "Incomplete"
    }
}

*/