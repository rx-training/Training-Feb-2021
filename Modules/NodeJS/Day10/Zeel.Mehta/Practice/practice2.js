// Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/emp-stud-database',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas
const employeeSchema = new mongoose.Schema({
    ID: String,
    AddressLine1: String,
    AddressLine2: String,
    AddressLine3: String,
    assignments : Array
    
});


// Create Model
const Employees = mongoose.model('Employee',employeeSchema);

async function createEmployee(){
    const student1=new Employees({
        ID:"1",
        AddressLine1: 'Divyajivan_Heights',
        AddressLine2: 'Kudasan',
        AddressLine2: 'Gandhinagar',
        
        assignments :[ {ID : '1',ActionCode : 'emp1code1' },{ID : '2',ActionCode : 'emp1code2' },
        {ID : '3',ActionCode : 'emp1code3' }]
    });
    const student2=new Employees({
        ID:"1",
        AddressLine1: 'Susmita_Flates',
        AddressLine2: 'Vasna',
        AddressLine2: 'Ahmedabad',
        
        assignments:[ {ID : '1',ActionCode : 'emp2code1' },{ID : '2',ActionCode : 'emp2code2' },
        {ID : '3',ActionCode : 'emp2code3' }]    });
    const result1 = await student1.save();
    const result2 = await student2.save();
    console.log(result1);
    console.log(result2);
}

createEmployee();




