const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/employeeCollection').then(() =>{
    console.log('connected to mongoDB')
})

const empSchema = new mongoose.Schema({
    ID : String,
    Name : String,
    Address :  String ,
    Skills : Array
});

const emps = mongoose.model('emps',empSchema)

async function create(){

    const employee = new emps ({
        ID : 'AB123',
        Name : 'Mosh',
        Address : 'Vasna',
        Skills : [ 'chess' , 'reading' , 'Travelling' ]
    });
    
    const result = await employee.save();
    console.log(result)
    
}

create()

