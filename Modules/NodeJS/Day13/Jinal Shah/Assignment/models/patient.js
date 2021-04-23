const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err)); 

  const patientSchema = new mongoose.Schema({
      patientID : {
          type : Number,
          required : true
      },
      patientName :{
          type : String,
          required : true
      },
      patientPhNO : {
          type : Number,
          validate: {
            validator: function(v) {
                return /\d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
          },
          required : true 
      },
      Doctors : [{
          type : mongoose.Schema.Types.ObjectId,
          ref : 'Doctors'
      }],
      Medicines : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Medicine'
    }]
  })


const patient = mongoose.model('Patients',patientSchema)
module.exports = patient

 async function addPatient(){

    const d1 = new patient ({
        patientID : 112,
        patientName : 'mukul patel',
        patientPhNO : 9424945437,
        Doctors : [ '6080fe9d40d96a40e090c820', '6080ff1241ae0b16245f3f22'],
        Medicines : [ '608102314f13a1368020cecb', '608102a4202eb21f58db2ce6']
    });
    
    try{
        const result = await d1.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message)
    }    
} 

// addPatient()
