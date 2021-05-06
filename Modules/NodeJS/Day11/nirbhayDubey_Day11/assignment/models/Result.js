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
        required:true
    },
    Percentage:{
        type:Number,
        required:true
    }
});

module.exports = Result = mongoose.model('result',ResultSchema);