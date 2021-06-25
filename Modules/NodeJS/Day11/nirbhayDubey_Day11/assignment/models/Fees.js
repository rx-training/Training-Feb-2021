const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FeesSchema=new Schema({
    courseName:{
        type:String,
        required:true
    },
    courseLength:{
        type:String,
        required:true
    },
    fees:{
        type:Number,
        required:true
    }
});

module.exports = Fees = mongoose.model('fees',FeesSchema);