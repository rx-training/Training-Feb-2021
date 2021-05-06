const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ResultSchema=new Schema({
    username:{
        type:String
    },
    enroll_number:{
        type:Number
    },
    subjects_marks:{
        type:[String]
    },
    Total:{
        type:Number
    },
    Percentage:{
        type:Number
    }
});

module.exports = Result = mongoose.model('result',ResultSchema);