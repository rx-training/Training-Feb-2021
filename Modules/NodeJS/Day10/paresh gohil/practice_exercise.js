const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Employees" , {useNewUrlParser : true ,  useUnifiedTopology: true })
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log("Could not connect to MongoDB...", err))

const empschema = new mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    skills: String
});

const Employee = mongoose.model("Employee" , empschema);

async function employeedata() {
    
    const employee = new Employee({
        id: 1,
        name: "Mosh",
        address: "Ahmedabad",
        skills: "Developing"
    })

    const result = await employee.save();
    console.log(result)
}

employeedata()