//import modules
const {Employee, validate} = require('../models/employees');

//export functions

//get employees
exports.getEmployees = async function (req, res) {
    try {
        //check if id provided or not
        if(req.params.id) {

            //get employee with id
            const employee = await Employee.findById(req.params.id);

            //check if employee exist
            if(!employee) return res.status(400).send('Employee with given id does not exist');

            //send employee
            res.send(employee);
        } else {
            const empoyees = await Employee.find();
            //send all employees
            res.send(empoyees);
    }
    } catch (error) {
        res.status(500).send(error);
    }
    
} 

//add employee
exports.addEmployee = async function (req, res) {
    try {
        //validate data recieved from user
        const result = validate(req.body);

        //if error return
        if(result.error) return res.status(400).send(result.error.message[0]);

        //create new employee
        let employee = new Employee({
            Name: req.body.Name,
            Address: req.body.Address,
            Skills: req.body.Skills
        }); 

        //save to database
        employee = await employee.save();

        //send new employee
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }   
}

//update employee
exports.updateEmployee = async function (req, res) {
    try {
        //find employee 
        let employee = await Employee.findById(req.params.id);

        //check if employee exist
        if(!employee) return res.status(400).send('Employee with given id was not found');

        //update sent data
        if(req.body.Name) employee.Name = req.body.Name;
        if(req.body.Address) employee.Address = req.body.Address;
        if(req.body.Skills) employee.Skills = req.body.Skills;

        //save data to db
        employee = await employee.save();
        
        //send updated employee
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
}

//delete an employee
exports.deleteEmployee = async function (req, res) {
    try {
        //find employee and delete
        const employee = await Employee.findByIdAndRemove(req.params.id);

        //if employee not found
        if(!employee) return res.status(400).send('Employee with given id was not found');

        //send deleted employee
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
}
