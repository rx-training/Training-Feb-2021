// Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/emp-stud-database',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas
const studentSchema = new mongoose.Schema({
    ID: Number,
    name: String,
    address: String,
    Fees:Array,
    Result: Array
    
});


// Create Model
const Student = mongoose.model('Student',studentSchema);

async function createStudent(){
    const student1=new Student({
        ID:1,
        name: 'Reena',
        author: 'Ahmedabad',
        Fees:[ {Amount : 10000, PaymentDate : "12/12/2020", Status : true}],
        Result:[ {Hindi:80},{Eng:110},{Math:60},{Total:210},{Grade:"A"}]
    });
    const student2=new Student({
        ID:2,
        name: 'Rita',
        author: 'Surat',
        Fees:[ {Amount : 12000, PaymentDate : "12/12/2020", Status : true}],
        Result:[ {Hindi:80},{Eng:70},{Math:60},{Total:210},{Grade:"A"}]
    });
    const result1 = await student1.save();
    const result2 = await student2.save();
    console.log(result1);
    console.log(result2);
}

createStudent();




