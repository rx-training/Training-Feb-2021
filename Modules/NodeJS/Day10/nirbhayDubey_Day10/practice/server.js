const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/day10practice')
    .then(() => console.log('Connected to mongodb...'))
    .catch(err => console.error('Could not connect to mongodb...',err));

//Import Schema for Employee to store in db
const Employee=require('./models/Employee');

//Creating new Object(OR new document for 'Employees' collection)
const employee=new Employee({
    name:'Rahul Dank',
    address:'A/113 Name of Society, Name of Landmark, City, State, Country',
    skills:['Mongodb','Express.js','React','Node.js']
});

//Saving new document to 'Employees' collection
employee.save()
    .then(emp => console.log(`Employee stored into database like \n${emp}`))
    .catch(err => console.error('Error while storing the object into db',err));

