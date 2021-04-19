// import modules
const Joi = require('joi');
const fs = require('fs');

const Student = require('../models/student');

// get student data
exports.getStudents = async function (req, res) {
    try {
        // check if id given in url
        if(req.params.id) {

            // get student with given id
            const student = await Student.findById(req.params.id);

            // check if student exist
            if(!student) return res.status(401).send(`student with given id is not found`)

            // send a student data
            res.send(student);
        } else {
            //get all students
            const students = await Student.find()

            // send all students data
            res.send(students);
        }
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

// add student 
exports.addStudent = async function (req, res) {
    try {
        // validate data 
        const result = validateStudent(req.body);

        //if error return
        if (result.error) return res.status(400).send(result.error);

        // calculate data total and grade
        const total = req.body.Result.Hindi + req.body.Result.Eng + req.body.Result.Math;

        const grade = getGrade(total)

        // create new student
        let student = new Student({
            Name: req.body.Name,
            Address: req.body.Address,
            Fees: req.body.Fees,
            Result: {
                Hindi: req.body.Result.Hindi,
                Eng: req.body.Result.Eng,
                Math: req.body.Result.Math,
                Total: total,
                Grade: grade
            }
        });

        // add new student
        student = await student.save();

        // send new student
        res.send(student)

    } catch (error) {
        //return error
        res.status(500).send(error);
    }
} 

// update student 
exports.updateStudent = async function (req, res) {
    try {
        // find student with studentid = id
        let student = await Student.findById(req.params.id)

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`)

        // update data
        if(req.body.Name) student.Name = req.body.Name;
        if(req.body.Address) student.Address = req.body.Address;

        // save to db
        student = await student.save();

        // send updated data
        res.send(student);
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
} 

// add student 
exports.deleteStudent = async function (req, res) {
    try {
        // find student and remove
        const student = await Student.findByIdAndRemove(req.params.id);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // send removed data
        res.send(student)
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
} 

// get fees
exports.getFees = async function (req, res) {
    try {
        //find student with given id
        const student = await Student.findById(req.studId)

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`)

        //send fees
        res.send(student.Fees)
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

// update fees
exports.updateFees = async function (req, res) {
    try {
        // find student with given id 
        let student = await Student.findById(req.studId);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // update fees
        if(req.body.Amount) student.Fees.Amount = req.body.Amount;
        if(req.body.PaymentDate) student.Fees.PaymentDate = req.body.PaymentDate;
        if(req.body.Status) student.Fees.Status = req.body.Status;

        //save to db
        student = await student.save();

        //send updated fees
        res.send(student.Fees);
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

//get results
exports.getResult = async function (req, res) {
    try {
        // find student with given id 
        const student = await Student.findById(req.studId);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // send result
        res.send(student.Result)
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

//update results
exports.updateResult = async function (req, res) {
    try {
        // find student with given id 
        let student = await Student.findById(req.studId);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // update fees
        if(req.body.Hindi) student.Result.Hindi = req.body.Hindi;
        if(req.body.Eng) student.Result.Eng = req.body.Eng;
        if(req.body.Math) student.Result.Math = req.body.Math;

        // calculate data total and grade
        const total = student.Result.Hindi + student.Result.Eng + student.Result.Math;

        const grade = getGrade(total)

        //update total and grade
        student.Result.Total = total;
        student.Result.Grade = grade;

        //save to db
        student = await student.save();

        // send updated result
        res.send(student.Result);
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}




// validate student
async function validateStudent(student) {
    try {
        const studentSchema = Joi.object({
            Name: Joi.string()
                .required(),
    
            Address: Joi.string()
                .required(),
    
            Fees: Joi.object({
                Amount: Joi.number()
                    .required(),
    
                PaymentDate: Joi.date()
                .required(),
    
                Status: Joi.any().valid('true', 'false').error(() => 'Gender should be true (or) false')
                .required()
            }).required(),
    
            Result: Joi.object({
                Hindi: Joi.number()
                    .integer()
                    .min(0)
                    .max(100)
                    .required(),
    
                Eng: Joi.number()
                    .integer()
                    .min(0)
                    .max(100)
                    .required(), 
    
                Math: Joi.number()
                    .integer()
                    .min(0)
                    .max(100)
                    .required(), 
            })
        });
    
        return await studentSchema.validate(student);
    } catch (error) {
        //return error
        res.status(500).send(error);
    }
}

// get grade
function getGrade(total) {
    let grade = 'F';

    if( (total / 3) > 90) grade = 'A';
    else if( (total / 3) > 80 && (total / 3) < 90) grade = 'B';
    else if( (total / 3) > 70 && (total / 3) < 80) grade = 'C';
    else if( (total / 3) > 60 && (total / 3) < 70) grade = 'D';
    else if( (total / 3) > 50 && (total / 3) < 60) grade = 'E';

    return grade;
}