const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const EmployeeSchema=new Schema({
    name: {
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    skills:{
        type:[String],
        required:true
    }
});

module.exports = Employee = mongoose.model('Employee',EmployeeSchema);