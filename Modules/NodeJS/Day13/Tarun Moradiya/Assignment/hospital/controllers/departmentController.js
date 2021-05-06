//import modules
const {Department, validateDep} = require('../models/departments');

const _ = require('lodash');

//get all departments
exports.getDepartments = async function (req, res) {

    //get all departments
    const departments = await Department.find();

    //send response
    res.send(departments);
}

//add departments
exports.addDepartment = async function (req, res) {

    //validate user input
    const results = validateDep(req.body);

    //if error return
    if(results.error) return res.status(400).send(results.error);

    //create department
    const department = new Department(_.pick(req.body, ['no', 'name']));

    //save department
    await department.save();

    //send response
    res.send(department);
}