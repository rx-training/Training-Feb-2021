const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Day10_Practice',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Mongodb connect'))
.catch(err => console.error('error',err))

const Employeeschema = new mongoose.Schema({
    Id:Number,
    Name:String,
    Address:String,
    Skill:[String]
})

const Employee = mongoose.model('Employee',Employeeschema)
const employee = new Employee({
    Id:1,
    name:'Jay',
    Address:'Ahmedabad,New ranip',
    Skill:['Python','Database']
})

employee.save()