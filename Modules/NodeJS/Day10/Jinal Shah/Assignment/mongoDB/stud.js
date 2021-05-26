const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/StudentData',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)

const studentSchema = new mongoose.Schema({
    ID : Number,
    Name : String,
    PhNo : Number,
    City : String,
    Fees : {
        Amount : Number,
        Date : String,
        Status : String
    },
    Result : {
        hindi : Number,
        eng : Number,
        Math : Number,
        Total : Number
    }
})

const student = mongoose.model('student' , studentSchema)

module.exports = student


/*

{
    "ID" : 1,
    "Name" : "Jinal",
    "PhNo" : 1234567890,
    "City" : "ahmedabad",
    "Fees" : {
        "Amount" : 10000,
        "Date" : "2020-12-10",
        "Status" : "paid"
    },
    "Result" : {
        "hindi" : 50,
        "eng" : 70,
        "Math" : 60,
        "Total" : 170
    }
}

*/