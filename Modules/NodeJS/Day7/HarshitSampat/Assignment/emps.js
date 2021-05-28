const express = require('express')

const fs = require('fs')

const router = express.Router()

const employees = require('./empDetails.json')

const assignment = require('./assignment')

//get employees
router.get('/', (req, res) => {
    res.send(employees)
})

//get employee by id
router.get('/:id', (req, res) => {
    const id = req.params.id

    //compare Emp_id to req id
    const emp = employees.find(c => c.Emp_Id = id)

    if (!emp) res.send(`Emp with ${id} is not found`)

    res.send(emp)
})

//Create new employee
router.post('/', (req, res) => {

    const newEmployee = {
        Emp_Id: employees.length + 1,
        addressline1: req.body.addressline1,
        addressline2: req.body.addressline2,
        assignment: [],
        citizenship: {},
        city: req.body.city,
        CorespondusLanguage: req.body.CorespondusLanguage,
        country: req.body.country,
        DOB: req.body.DOB,
        licence: {},
        gender: req.body.gender,
        HireDate: req.body.HireDate,
        mobileno: req.body.mobileno,
        lastName: req.body.lastName,
        MaritalStatus: req.body.MaritalStatus
    }
    employees.push(newEmployee)
    fs.writeFile('./empDetails.json', JSON.stringify(employees), (err) => {
        if (err) return console.log('data not save in file')
    })

    res.send(employees)
})

//update employee
router.put('/:id', (req, res) => {
    const id = req.params.id

    //search employee
    const employee = employees.find(c => c.Emp_Id === parseInt(req.params.id))

    if (!id) return res.send('`Employee not found')

    if (req.body.addressline1) employee.addressline1 = req.body.addressline1
    if (req.body.addressline2) employee.addressline2 = req.body.addressline2
    if (req.body.citizenship) employee.citizenship = req.body.citizenship
    if (req.body.CorespondusLanguage) employee.CorespondusLanguage = req.body.CorespondusLanguage
    if (req.body.country) employee.country = req.body.country
    if (req.body.DOB) employee.DOB = req.body.employee
    if (req.body.Licences) employee.licence = req.body.licence
    if (req.body.HireDate) employee.HireDate = req.body.HireDate
    if (req.body.mpbileno) employee.mobileno = req.body.mobileno
    if (req.body.lastName) employee.lastName = req.body.lastName
    if (req.body.MaritalStatus) employee.MaritalStatus = req.body.MaritalStatus

    fs.writeFile('./empDetails.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('Data not saved in file')
    })
    res.send(employee)
})

//delete employee by id
router.delete('/:id', (req, res) => {
    const id = req.params.id //store id from request

    //search  employee id in employes
    const employee = employees.find(c => c.Emp_Id == id)
    if (!id) res.send(` ${id} Not found!`)
    const index = employees.indexOf(employee)
    employees.splice(index, 1)

    //Update fie
    fs.writeFile('./empDetails.json', JSON.stringify(employees), (err) => {
        if (err) return console.error(`Not Deleted!!`)
    })
    res.send(employees)
})

//child route

router.use('/:Emp_Id/child/assignments', (req, res, next) => {
    req.Emp_Id = req.params.Emp_Id

    //search employee
    const employee = employees.find(c => c.Emp_Id == req.Emp_Id)
    
    //if not found then print err msg

    if (!employee) return res.send(`EmpId not found`)
    req.employee = employee
    next()

}, assignment)

module.exports = router