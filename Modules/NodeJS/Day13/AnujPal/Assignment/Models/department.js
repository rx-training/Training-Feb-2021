const mongoose = require('mongoose');
const departmentSchema = new mongoose.Schema({
    deptID :{
        type: String,
        required:[true,'You cannot keep deptID blank'],
   
    },
    deptName:{
        type: String,
        required : true,
        unique:true
    }
})

module.exports=departmentSchema;