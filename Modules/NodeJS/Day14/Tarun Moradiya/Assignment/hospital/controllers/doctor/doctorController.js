//import modules
const {Doctor, validateDoc: validate } = require('../../models/doctors');

const _ = require('lodash');

//get all departments
exports.getDoctors = async (req, res) => {

    if(req.params.id) {

        //get doctor
        const doctor = await Doctor.findById(req.params.id).populate('department', 'no name');

        //if not found return
        if(!doctor) return res.status(401).send('Doctor with given id does not exist');

        //send response
        res.send(doctor);
    } else {

        //get all departments
        const doctors = await Doctor.find().populate('department', 'no name');

        //send response
        res.send(doctors);
    }
}

//add departments
exports.addDoctor = async (req, res) => {

    //validate user input
    const results = validate(req.body);

    //if error return
    if(results.error) return res.status(400).send(results.error);

    //create doctor
    const doctor = new Doctor(_.pick(req.body, ['name', 'email', 'department']));

    //save department
    await doctor.save();

    //send response
    res.send(doctor);
}

//update
exports.updateDoctor = async (req, res) => {

    //check if doctor exist
    const doctor = await Doctor.findById(req.params.id);

    if(!doctor) return res.status(401).send('doctor with this id does not exist');

    //update data
    if(req.body.name) doctor.name = req.body.name;
    if(req.body.email) doctor.email = req.body.email;
    if(req.body.department) doctor.department = req.body.department;

    //save data
    await doctor.save();

    //send response
    res.send(doctor);
}

//delete
exports.deleteDoctor = async (req, res) => {
    //remove if doctor exist
    const doctor = await Doctor.findByIdAndRemove(req.params.id);

    //if not return
    if(!doctor) return res.status(401).send('doctor with this id does not exist');

    //send response
    res.send(doctor);
}