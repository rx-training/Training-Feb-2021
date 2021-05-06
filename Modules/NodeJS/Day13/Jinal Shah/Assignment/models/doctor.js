const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/hospital',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err)); */


const doctorSchema = new mongoose.Schema({
    DoctorID : {
        type : Number,
        required : true
    },
    DoctorName :{
        type : String,
        required : true
    },
    Department : {
        type : String,
        required : true
    },
    PhNO : {
        type : Number,
        validate: {
          validator: function(v) {
              return /\d{10}/.test(v);
          },
          message: '{VALUE} is not a valid 10 digit number!'
        },
        required : true 
    }
})

  

const doctor = mongoose.model('Doctors',doctorSchema)
module.exports = doctor

/* async function addDoctor(){

    const d1 = new doctor ({
        DoctorID : 103,
        DoctorName : 'Ashok Vyas',
        Department : 'Dept03',
        PhNO : 9135786874
    });
    
    try{
        const result = await d1.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message)
    }    
} */

//addDoctor()

/*

{
    "DoctorID" : 104,
        "DoctorName" : "Dikshit Vyas",
        "Department" : "Dept03",
        "PhNO" : 9135786874
}

*/
