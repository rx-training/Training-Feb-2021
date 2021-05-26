const router = require('express').Router()
const employees = require('../data/employees.json')

const fs = require('fs')

const {validateAssignment} = require('../middlewares/errorHandling')

//get all assignments
router.get('/', (req, res) => {
    //get employee
    const emp = req.emp

    res.send(emp.assignments)
})

//get an assignment
router.get('/:id', (req, res) => {
    //get employee
    const emp = req.emp

    const id = req.params.id

    const assignment = emp.assignments.find(c => c.id == id)

    if(!assignment) return res.status(404).send(`assignment with id ${id} not found`)

    res.send(assignment)
})

//add an assignment
router.post('/', (req, res) => {
    //get empid from previos middleware from emps
    const empId = req.empId

    validateAssignment(req.body)

    //find emp in employees 
    const myemp = employees.find(c => c.empId == empId)

    console.log(myemp)

    const newAss = {
        id: myemp.assignments.length+1,
        assignmetName: req.body.assignmetName,
        departmentId: req.body.departmentId,
        endDate: req.body.endDate
    }

    myemp.assignments.push(newAss)

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })

    console.log(employees)

    res.send(myemp)
})

//edit an assignment
router.put('/:id', (req, res) => {
    //get empid from previos middleware from emps
    const empId = req.empId

    const id = req.params.id

    //find emp in employees 
    const myemp = employees.find(c => c.empId == empId)

    const assignment = myemp.assignments.find(c => c.id == id)

    if(!assignment) return res.status(404).send(`assignment with id ${id} not found`)

    if(req.body.assignmetName) assignment.assignmetName = req.body.assignmetName
    if(req.body.departmentId) assignment.departmentId = req.body.departmentId
    if(req.body.endDate) assignment.endDate = req.body.endDate

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })

    res.send(myemp)
})

//delete an assignment
router.delete('/:id', (req, res) => {
    //get empid from previos middleware from emps
    const empId = req.empId

    //find emp in employees 
    const myemp = employees.find(c => c.empId == empId)

    const id = req.params.id

    const assignment = myemp.assignments.find(c => c.id == id)

    if(!assignment) return res.status(404).send(`assignment with id ${id} not found`)

    const index = myemp.assignments.indexOf(assignment)

    myemp.assignments.splice(index, 1)

    fs.writeFile('data/employees.json', JSON.stringify(employees), (err) => {
        if (err) return console.error('something went wrong!!!')
    })

    res.send(employees)
})

module.exports = router
