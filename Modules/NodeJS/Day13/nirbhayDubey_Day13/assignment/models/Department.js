const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DoctorSchema=new Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'doctor',
        required:true
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    phoneno:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    }
});

const DepartmentSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:50
    },
    head:{
        type:DoctorSchema,
        required:true,
    }
});

module.exports = Department = mongoose.model('department',DepartmentSchema);