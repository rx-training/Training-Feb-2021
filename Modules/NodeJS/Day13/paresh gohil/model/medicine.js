const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    mid: Number,
    name: String,
    MType: {
        type: String,
        enum: ["GSL","PM","POM","CD"]
    },
    uses: String,
    manufacturedate: String,
    expirydate: String,
    price: Number,
    mtime: {
        type: String,
        enum: ["morning","afternoon","night"]
    }    
})
//GSL:- General Sales List
//PM:- Pharmacy Medicines
//POM:- Presciption Only Medicines
//CD:- Controlled Drugs

const Medicine = mongoose.model("Medicine",medicineSchema)

exports.Medicine = Medicine
exports.medicineSchema = medicineSchema