//import modules
const {Doctor} = require('../../models/doctors');
const {Patient} = require('../../models/patients');

const _ = require('lodash');

//get all departments
exports.getPatients = async (req, res) => {

    //get doctor
    const doctor = await Doctor.findById(req.docId)

    //if not found return
    if(!doctor) return res.status(401).send('Doctor with given id does not exist');

    if(req.params.id) {

        //get patient
        const patient = await Patient.findById(req.params.id);

        patient.data = _.pick(patient.doctors.find(d => d.doctor == req.docId), 'drugs', 'report');

        //if not found return
        if(!patient.data) return res.status(401).send('doctor has no such patient');

        //send response
        res.send(_.pick(patient, '_id', 'name', 'contact', 'data'));
    } else {

        //get all patients
        let patients = await Patient.find();

        //get patient of the doctor
        patients = patients.filter(p => p.doctors.find(d => d.doctor == req.docId))
        
        //get only needed doctor's data
        patients.forEach((element) => {
            element.data = _.pick(element.doctors.find(d => d.doctor == req.docId), 'drugs', 'report')
        })
        patients = patients.map(p => _.pick(p, '_id', 'name', 'contact', 'data'));
        
        //send response
        res.json({
            doctor: doctor,
            patients: patients
        });
    }
}

