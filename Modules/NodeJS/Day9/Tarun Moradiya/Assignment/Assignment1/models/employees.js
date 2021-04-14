// import modules
const Joi = require('joi')
const fs = require('fs');

//validate employee
async function validateEmp(emp) {
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
}

// validate assignment
async function validateAssignment(assignment) {
    const assignmentSchema = Joi.object({
        assignmetName: Joi.string()
            .required(),
        departmentId: Joi.number()
            .required(),
        endDate: Joi.date()
            .required()
    });

    return await assignmentSchema.validate(assignment);
}

// class
class Employees {

    // get employee data
    static getEmpoyees(req, res) {
        if(req.params.id) {
            const employee = global.employees.find(c => c.empId == req.params.id);

            if(!employee) return res.status(401).send('Employee with given Id does not exist');
            res.send(employee);
        } else {
            res.send(global.employees);
        }
    }

    // add employee 
    static addEmployee(req, res) {
        const result = validateEmp(req.body);
        
        if (result.error) return res.status(400).send(result.error);

        const newEmp = {
            empId: global.employees.length + 1,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            city: req.body.city,
            country: req.body.country,
            Gender: req.body.Gender,
            assignments: []
        };
        console.log(newEmp)
        global.employees.push(newEmp);

        fs.writeFile('data/employees.json', JSON.stringify(global.employees), (err) => {
            if (err) return console.error('something went wrong!!!');
        });

        res.send(newEmp);
    } 

    // update employee 
    static updateEmployee(req, res) {

        //find empoyee with empid = id
        const emp = global.employees.find(c => c.empId == req.params.id)

        //check if employee exist
        if(!emp) return res.status(401).send(`Employee with given id is not found`)

        if(req.body.firstname) emp.firstname = req.body.firstname
        if(req.body.lastname) emp.lastname = req.body.lastname
        if(req.body.city) emp.city = req.body.city
        if(req.body.country) emp.country = req.body.country
        if(req.body.Gender) emp.Gender = req.body.Gender

        fs.writeFile('data/employees.json', JSON.stringify(global.employees), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        res.send(emp)
    }

    // delete employee 
    static deleteEmployee(req, res) {

        //find empoyee with empid = id
        const emp = employees.find(c => c.empId == req.params.id)

        //check if employee exist
        if(!emp) return res.status(401).send(`Employee with given id is not found`)

        const index = employees.indexOf(emp)

        employees.splice(index, 1)

        fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        res.send(employees)
    }

    // get assignments 
    static getAssignments(req, res) {
        const employee = global.employees.find(c => c.empId == req.empId)
        if(req.params.id) {
            const assignment = employee.assignments.find(c => c.id == req.params.id)

            if(!assignment) return res.status(401).send('Assignment with given Id does not exist')

            res.send(assignment)
        } else {
            res.send(employee.assignments)
        }
    }

    // add assignment 
    static addAssignment(req, res) {

        validateAssignment(req.body)

        //find emp in employees 
        const employee = global.employees.find(c => c.empId == req.empId)

        const newAss = {
            id: employee.assignments.length+1,
            assignmetName: req.body.assignmetName,
            departmentId: req.body.departmentId,
            endDate: req.body.endDate
        }

        employee.assignments.push(newAss)

        fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        res.send(employee)
    }

    // update assignment 
    static updateAssignment(req, res) {
        
        // find emp in employees 
        const employee = global.employees.find(c => c.empId == req.empId)

        //
        const assignment = employee.assignments.find(c => c.id == req.params.id)

        if(!assignment) return res.status(401).send(`assignment with given id not found`)

        if(req.body.assignmetName) assignment.assignmetName = req.body.assignmetName
        if(req.body.departmentId) assignment.departmentId = req.body.departmentId
        if(req.body.endDate) assignment.endDate = req.body.endDate

        fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        res.send(employee)
    }

    // delete assignment 
    static deleteAssignment(req, res) {
       
        // find emp in employees 
        const employee = global.employees.find(c => c.empId == req.empId);

        // find assignment
        const assignment = employee.assignments.find(c => c.id == req.params.id);

        // check if assignment exist or not
        if(!assignment) return res.status(401).send(`assignment with given id not found`);

        // get index of assignment
        const index = employee.assignments.indexOf(assignment);

        // remove assignment
        employee.assignments.splice(index, 1);

        // update file
        fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
            if (err) return console.error('something went wrong!!!');
        });

        // send response
        res.send(employees);
    }

}

// exports
module.exports = Employees