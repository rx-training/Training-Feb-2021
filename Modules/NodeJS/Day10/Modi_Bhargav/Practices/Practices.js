/* 1. Create EmployeeObject with ID,Name,Address,skills and store it empcollection.*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Employees', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const employeeSchema = new mongoose.Schema({
  ID: Number,
  Name: String,
  Address: String,
  skills: Array
})

const Employees = mongoose.model('empcollection', employeeSchema)

async function createEmployee() {

  const employee = new Employees({
    ID:102,
    Name: 'Prit Modi',
    Address: 'Patan',
    skills: ['Frontend','designer']
  })

  const result = await employee.save()
  console.log(result)
}

createEmployee()


