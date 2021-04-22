const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Employees" , {useNewUrlParser : true ,  useUnifiedTopology: true })
    .then(() => console.log("connected to MongoDB"))
    .catch(err => console.log("Could not connect to MongoDB...", err))

const empschema = new mongoose.Schema({
    id: Number,
    name: {type : String, 
        required : true,
        minlength: 5,
        maxlength: 255},
    category: {
        type: String,
        enum: ["web", "mobile","network"] //built in validate
    },
    tags: {
        type: Array,
        validate: {  //custom validate
            isAsync: true,//async validator
            validator: function(v, callback){
                setTimeout(() => {
                    const result = v && v.length > 0
                    callback(result)
                }, 4000);
            },
            message: "At least one tag needed"
        }
    },
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

    try{
        const result = await employee.save();
        console.log(result)
    }
    catch(ex){
        for (field in ex.errors)
        console.log(ex.errors[field].message)
    }
}

employeedata()

// async function getemployee(){
//     const employee = await Employee
    //comparision operator
    //lt
    //gt
    //lte
    //gte
    //eq
    //ne
    //in
    //nin
    //  .find({id: { $gte : 1, $lt : 3}})
        // .find({id : {$in : [1,2]}})
        // .limit(10)
        // .sort({name : 1})
        // .select({name: 1})

    //logical operator
    //    .find()
    //    .or([{name: "Mosh"},{address: "Ahmedabad"}])
    //    .and([{name: "Mosh",address: "Ahmedabad"}])
      
    
    //regular expression
    //    .find({name : /^Mosh/})
    //    .find({name : /Mosh$/})
    //    .find({name : /.*Mosh.*/})

    //counting
    //    .find({name : "Mosh"})
    //    .count()

    //pagination
    //    const pageNumber = 2
    //    const pageSize = 10
    //    .find({name : "Mosh"})
    //    .skip((pageNumber - 1) * pageSize)
    //    .limit(pageSize) 
//}

//getemployee()