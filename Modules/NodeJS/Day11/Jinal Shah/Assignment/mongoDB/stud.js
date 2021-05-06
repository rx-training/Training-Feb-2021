const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/StudentData',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)

const studentSchema = new mongoose.Schema({
    ID : { type : Number, required :  true },
    Name : { type : String, required :  true },
    PhNo : { type : Number, required :  true },
    City : { type : String, required :  true },
    Fees : {
        Amount : { type : Number, required :  true },
        Date : { type : String, required :  true },
        Status : { type : String , required :  true },
    },
    Result : {
        hindi : { type : Number, required :  true },
        eng : { type : Number, required :  true },
        Math : { type : Number, required :  true },
        Total : { type : Number, required :  true },
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