// import modules
const Joi = require('joi');
const fs = require('fs');

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
        res.status(500).send(error)
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

// class
class Students {

    // get student data
    static getStudents(req, res) {
        
        // check if id given in url
        if(req.params.id) {

            // get student with given id
            const student = global.students.find(c => c.ID == req.params.id);

            // check if student exist
            if(!student) return res.status(401).send(`student with given id is not found`)

            // send a student data
            res.send(student);
        } else {

            // send all students data
            res.send(global.students);
        }
    }

    // add student 
    static addStudent(req, res) {

        // validate data 
        const result = validateStudent(req.body);

        //if error return
        if (result.error) return res.status(400).send(result.error);

        // calculate data total and grade
        const total = req.body.Result.Hindi + req.body.Result.Eng + req.body.Result.Math;

        const grade = getGrade(total)

        // create new student
        const newStudent = {
            ID: global.students.length + 1,
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
            // Fees: {
            //     Amount: req.body.fees,
            //     PaymentDate: req.body.paymentDate,
            //     Status: req.body.status
            // }
        };

        // add new student
        global.students.push(newStudent);

        // update in json file
        fs.writeFile('data/students.json', JSON.stringify(global.students), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        // send new student
        res.send(newStudent)

    } 

    // update student 
    static updateStudent(req, res) {

        // find student with studentid = id
        const student = global.students.find(c => c.ID == req.params.id)

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`)

        // update data
        if(req.body.Name) student.Name = req.body.Name
        if(req.body.Address) student.Address = req.body.Address

        // update file
        fs.writeFile('data/students.json', JSON.stringify(global.students), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        // send updated data
        res.send(student)
    } 

    // add student 
    static deleteStudent(req, res) {

        // find student with studentid = id
        const student = global.students.find(c => c.ID == req.params.id);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // get student index
        const index = global.students.indexOf(student);

        // remove student
        global.students.splice(index, 1)

        // update file
        fs.writeFile('data/students.json', JSON.stringify(global.students), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        // send removed data
        res.send(student)
    } 

    // get fees
    static getFees(req, res) {

        //find student with given id
        const student = global.students.find(c => c.ID == req.studId)

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`)

        //send fees
        res.send(student.Fees)
    }
    
    // update fees
    static updateFees(req, res) {

        // find student with given id 
        const student = global.students.find(c => c.ID == req.studId);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // update fees
        if(req.body.Amount) student.Fees.Amount = req.body.Amount;
        if(req.body.PaymentDate) student.Fees.PaymentDate = req.body.PaymentDate;
        if(req.body.Status) student.Fees.Status = req.body.Status;

        // update file
        fs.writeFile('data/students.json', JSON.stringify(global.students), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        //send updated fees
        res.send(student.Fees)
    }

    //get results
    static getResult(req, res) {

        // find student with given id 
        const student = global.students.find(c => c.ID == req.studId);

        // check if student exist
        if(!student) return res.status(401).send(`student with given id is not found`);

        // send result
        res.send(student.Result)
    }

    //update results
    static updateResult(req, res) {

        // find student with given id 
        const student = global.students.find(c => c.ID == req.studId);

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

        // update file
        fs.writeFile('data/students.json', JSON.stringify(global.students), (err) => {
            if (err) return console.error('something went wrong!!!')
        })

        // send updated result
        res.send(student.Result)
    }

}

// exports
module.exports = Students