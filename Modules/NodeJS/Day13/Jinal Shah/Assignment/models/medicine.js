const mongoose = require('mongoose');

/* mongoose.connect('mongodb://localhost/hospital',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err)); */

const medicineSchema = new mongoose.Schema({
    MedicineID : {
        type : String,
        required : true
    },
    MedicineName :{
        type : String,
        required : true
    },
    MedicineTime : [{
        type : String,
        required : true,
        enum : ['morning','afternoon','night']
    }],
})


const medicine = mongoose.model('Medicine',medicineSchema)
module.exports = medicine

async function addMedicine(){

    const d1 = new medicine ({
        MedicineID : 'IJ234',
        MedicineName : 'emicizumab',
        MedicineTime : ['morning','afternoon']
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

//addMedicine()

/*

{
    "MedicineID" : "TR781",
    "MedicineName" : "Azithromycin",
    "MedicineTime" : ["morning","afternoon","night"]
}

*/
