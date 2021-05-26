//import modules
const {Patient, validatePatient: validate} = require('../models/patients');

const _ = require('lodash');

//get all patients
exports.getReports = async (req, res) => {

    //get patient
    const patient = await Patient.findById(req.patientId);

    //if not found return
    if(!patient) return res.status(401).send('patient with given id does not exist');

    //if id of doctor provided
    if(req.params.id) {

        //get report of a doctor
        report = await patient.doctors.find(c => c.doctor == req.params.id);

        //send response
        res.send(report);
    } else {

        //get all patients
        const reports = await patient.doctors;

        //send response
        res.send(reports);
    }
}

//get medicine list
exports.getMedicines = async (req, res) => {

    //get patient
    const patient = await Patient.findById(req.patientId);
    
    //if not found return
    if(!patient) return res.status(401).send('patient with given id does not exist');

    //initialize array
    let medicines = [];

    //add medicines
    patient.doctors.forEach(element => {
        if(element.drugs.morning.length > 0) medicines = medicines.concat(element.drugs.morning);
        if(element.drugs.afternoon.length > 0) medicines = medicines.concat(element.drugs.afternoon);
        if(element.drugs.night.length > 0) medicines = medicines.concat(element.drugs.night);
    });

    //get unique value
    medicines = medicines.filter((item, i, arr) => arr.indexOf(item) === i);

    res.send(medicines);
}


//get medicine list
exports.getSummary = async (req, res) => {

    //get patient
    const patient = await Patient.findById(req.patientId);
    
    //if not found return
    if(!patient) return res.status(401).send('patient with given id does not exist');

    reports = []

    patient.doctors.forEach(element => reports.push(_.pick(element, 'report', 'doctor')))

    res.send(reports)
}