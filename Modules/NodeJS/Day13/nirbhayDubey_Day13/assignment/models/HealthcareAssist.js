const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const HealthcareAssistSchema=new Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:200
    },
    gender:{
        type:String,
        required:true,
        minlength:3,
        maxlength:10
    },
    phoneno:{
        type:String,
        required:true,
        minlength:5,
        maxlength:20
    },
    joindate:{
        type:Date,
        required:true,
        default:Date.now
    },
    deptassign:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'department',
        required:true
    }
});

module.exports = HealthcareAssist = mongoose.model('healthcareassist',HealthcareAssistSchema);