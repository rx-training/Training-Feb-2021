const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/StudentData',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)

const studentSchema = new mongoose.Schema({
    ID : { type : Number, required :  true },
    Name : { type : String, required :  true },
    PhNo : { 
        type: Number,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        } 
    },
    City : { type : String, required :  true },
    Fees : {
        Amount : { type : Number, required :  true },
        Date : { type : String, required :  true },
        Status : { type : String , required :  true },
    },
    Result : {
        hindi : { 
            type : Number, 
            required :  true ,
            min : 0,
            max : 100
        },
        eng : { 
            type : Number, 
            required :  true ,
            min : 0,
            max : 100
        },
        Math : { 
            type : Number, 
            required :  true ,
            min : 0,
            max : 100
        },
        Total : { 
            type : Number, 
            required :  true ,
            min : 0,
            max : 300
        },
    }
})

const student = mongoose.model('student' , studentSchema)

module.exports = student


/*

{
    "ID" : 1,
    "Name" : "Jinal",
    "PhNo" : 12345670,
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

async function createCourse(){

    const course = new student ({
        ID : 1,
        Name : "Jinal",
        PhNo : 9725685946,
        City : "ahmedabad",
        Fees : {
            Amount : 10000,
            Date : "2020-12-10",
            Status : "paid"
        },
        Result : {
            hindi : 50,
            eng : 70,
            Math : 60,
            Total : 170
    }
        
    });
    
    try{
        const result = await course.save();
        console.log(result)
    }
    catch(ex){
        for(let field in ex.errors)
            console.log(ex.errors[field].message)
    }    
}

//createCourse()
