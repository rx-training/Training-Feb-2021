const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ResultSchema=new Schema({
    username:{
        type:String,
        required:true
    },
    enroll_number:{
        type:Number,
        required:true
    },
    subjects_marks:{
        type:Array,
        required:true
    },
    Total:{
        type:Number,
        required:true,
        min:0,
        max:500
    },
    Percentage:{
        type:Number,
        required:true,
        min:1,
        max:100
    }
});

module.exports = Result = mongoose.model('result',ResultSchema);