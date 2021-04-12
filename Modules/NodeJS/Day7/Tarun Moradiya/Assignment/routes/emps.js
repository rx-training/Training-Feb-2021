const express = require('express')
const fs = require('fs')

const router = express.Router() 

const employees = require('../data/employees.json')

const {validateEmp} = require('../middlewares/errorHandling')

const assignments = require('./assignments')

//get all employees
router.get('/', (req, res) => {
    res.send(employees)
})

//get specific employee
router.get('/:id', (req, res) => {
    const id = req.params.id 

    //find empoyee with empid = id
    const emp = employees.find(c => c.empId == id)

    //check if employee exist
    if(!emp) return res.status(404).send(`Employee with id ${id} is not found`)

    res.send(emp)
})

//add an employee
router.post('/', (req, res) => {
    // console.log(req.body)
    const result = validateEmp(req.body)

    if (result.error) return res.status(400).send(result.error.details[0].message)

    const newEmp = {
        empId: employees.length+1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        city: req.body.city,
        country: req.body.country,
        Gender: req.body.Gender,
        assignments: []
    }

    employees.push(newEmp)

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })


    res.send(newEmp)
})

//update an employee
router.put('/:id', (req, res) => {
    const id = req.params.id 

    //find empoyee with empid = id
    const emp = employees.find(c => c.empId == id)

    //check if employee exist
    if(!id) return res.status(404).send(`Employee with id ${id} is not found`)

    if(req.body.firstname) emp.firstname = req.body.firstname
    if(req.body.lastname) emp.lastname = req.body.lastname
    if(req.body.city) emp.city = req.body.city
    if(req.body.country) emp.country = req.body.country
    if(req.body.Gender) emp.Gender = req.body.Gender

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })

    res.send(emp)
})

//delete an employee
router.delete('/:id', (req, res) => {
    const id = req.params.id 

    //find empoyee with empid = id
    const emp = employees.find(c => c.empId == id)

    //check if employee exist
    if(!id) return res.status(404).send(`Employee with id ${id} is not found`)

    const index = employees.indexOf(emp)

    employees.splice(index, 1)

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })

    res.send(employees)
})

//child route middleware

//http://localhost:3000/emps/{empID}/child/assignments
router.use('/:empId/child/assignments', (req, res, next) => {
    req.empId = req.params.empId

    //find employee with id = empid
    const emp = employees.find((c) => c.empId == req.empId)

    //validate
    if(!emp) return res.status(404).send(`Employee with id ${req.empId} is not found`)

    req.emp = emp
    next()
}, assignments)

module.exports = router