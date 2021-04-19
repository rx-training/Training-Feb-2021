// import modules
const Joi = require('joi')
const fs = require('fs');

const Employee = require('../models/employee');

// get employee data
exports.getEmployees = async function (req, res) {
    try {
        //check if id given 
        if(req.params.id) {

            //find employee from db
            const employee = await Employee.findById(req.params.id)
    
            //check if employee exist
            if(!employee) return res.status(401).send('Employee with given Id does not exist');

            //send response employee
            res.send(employee);
        } else {
            //get all employees from db
            const employees = await Employee.find()
            res.send(employees);
        }
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

// add employee 
exports.addEmployee = async function (req, res) {
    try {

        //validate user input
        const result = validateEmp(req.body);
        
        //if error return
        if (result.error) return res.status(400).send(result.error);

        //create new employee
        let employee = new Employee({
            empId: Employee.length + 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            city: req.body.city,
            country: req.body.country,
            Gender: req.body.Gender,
        });

        //save employee to db
        employee = await employee.save();

        //send new employee
        res.send(employee);
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
} 

// update employee 
exports.updateEmployee = async function (req, res) {
    try {
        //find employee with empid = id
        let employee = await Employee.findById(req.params.id)

        //check if employee exist
        if(!employee) return res.status(401).send(`Employee with given id is not found`)

        //update employee
        if(req.body.firstname) employee.firstname = req.body.firstname
        if(req.body.lastname) employee.lastname = req.body.lastname
        if(req.body.city) employee.city = req.body.city
        if(req.body.country) employee.country = req.body.country
        if(req.body.Gender) employee.Gender = req.body.Gender

        //save to db
        employee = await employee.save()

        //send updated employee
        res.send(employee)
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// delete employee 
exports.deleteEmployee = async function (req, res) {
    try {
        //find employee with id and remove
        const employee = await Employee.findByIdAndRemove(req.params.id)

        //return if not exist
        if(!employee) return res.status(401).send(`Employee with given id is not found`)

        //return deleted employee
        res.send(employees)
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// get assignments 
exports.getAssignments = async function (req, res) {
    try {
        //get employee
        const employee = await Employee.findById(req.empId)

        //check if assignment id given
        if(req.params.id) {

            //get assignment
            const assignment = await employee.assignments.id(req.params.id)

            //if assignment not found return
            if(!assignment) return res.status(401).send('Assignment with given Id does not exist')

            //send assignment
            res.send(assignment)
        } else {

            //send all assignments
            res.send(employee.assignments)
        }
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// add assignment 
exports.addAssignment = async function (req, res) {
    try {
        //validate user input
        const result = validateAssignment(req.body)

        //if error return
        if (result.error) return res.status(400).send(result.error);

        //find employee 
        let employee = await Employee.findById(req.empId)
        console.log(employee)
        //create new assignment
        const assignment = {
            assignmetName: req.body.assignmetName,
            departmentId: req.body.departmentId,
            endDate: req.body.endDate
        }
    
        //add to employee
        employee.assignments.push(assignment)
    
        //save employee
        employee = await employee.save()
    
        //send employee
        res.send(employee)
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// update assignment 
exports.updateAssignment = async function (req, res) {
    try {
        // find employee
        let employee = await Employee.findById(req.empId)

        //find assignment
        const assignment = await employee.assignments.id(req.params.id)

        //if assignment not found return
        if(!assignment) return res.status(401).send(`assignment with given id not found`)

        //update data
        if(req.body.assignmetName) assignment.assignmetName = req.body.assignmetName
        if(req.body.departmentId) assignment.departmentId = req.body.departmentId
        if(req.body.endDate) assignment.endDate = req.body.endDate

        //save employee
        employee = await employee.save();

        //send employee
        res.send(employee)
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// delete assignment 
exports.deleteAssignment = async function (req, res) {
    try {
        // find employee
        let employee = await Employee.findById(req.empId);

        // // find assignment
        // const assignment = await employee.assignments.id(req.params.id);

        // // check if assignment exist or not
        // if(!assignment) return res.status(401).send(`assignment with given id not found`);

        // // remove assignment
        // employee.assignment.remove();

        employee.assignments.id(req.params.id).remove();

        //save employee
        employee = await employee.save();

        // send response
        res.send(employee);
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}


//validate employee
async function validateEmp(emp) {
    try {
        const EmpSchema = Joi.object({
            firstname: Joi.string()
                .required(),
            lastname: Joi.string()
                .required(),
            city: Joi.string()
                .required(),
            country: Joi.string()
                .required(),
            Gender:  Joi.any().valid('Male', 'Female').error(() => 'Gender should be Male (or) Female')
                .required()
        });
    
        return await EmpSchema.validate(emp);
    } catch (error) {
        //return error
        res.status(500).send(error)
    }
}

// validate assignment
async function validateAssignment(assignment) {
    try {
        const assignmentSchema = Joi.object({
            assignmetName: Joi.string()
                .required(),
            departmentId: Joi.number()
                .required(),
            endDate: Joi.date()
                .required()
        });
    
        return await assignmentSchema.validate(assignment); 
    } catch (error) {
        //return error
        res.status(500).send(error.message)
    }
}
