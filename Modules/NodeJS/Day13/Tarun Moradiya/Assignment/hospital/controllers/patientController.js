//import modules
const {Patient, validatePatient: validate} = require('../models/patients');

const _ = require('lodash');

//get all patients
exports.getPatient = async (req, res) => {

    if(req.params.id) {

        //get patient
        const patient = await Patient.findById(req.params.id);

        //if not found return
        if(!patient) return res.status(401).send('patient with given id does not exist');

        //send response
        res.send(patient);
    } else {

        //get all patients
        const patients = await Patient.find();

        //send response
        res.send(patients);
    }
}

//add patient
exports.addPatient = async (req, res) => {

    //validate user input
    const results = validate(req.body);

    //if error return
    if(results.error) return res.status(400).send(results.error);

    //create patient
    const patient = new Patient(_.pick(req.body, ['name', 'contact', 'doctors', 'assistants']));

    //save 
    await patient.save();

    //send response
    res.send(patient);
}

//update
exports.updatePatient = async (req, res) => {

    //check if doctor exist
    const patient = await Patient.findById(req.params.id);

    if(!patient) return res.status(401).send('patient with this id does not exist');

    //update data
    if(req.body.name) patient.name = req.body.name;
    if(req.body.contact) patient.contact = req.body.contact;
    if(req.body.doctors) patient.doctors = req.body.doctors;
    if(req.body.assitants) patient.assitants = req.body.assitants;

    //save data
    await patient.save();

    //send response
    res.send(patient);
}

//delete
exports.deletePatient = async (req, res) => {
    //remove if doctor exist
    const patient = await Patient.findByIdAndRemove(req.params.id);

    //if not return
    if(!patient) return res.status(401).send('doctor with this id does not exist');

    //send response
    res.send(patient);
}