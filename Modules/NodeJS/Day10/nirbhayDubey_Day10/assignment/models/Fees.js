const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FeesSchema=new Schema({
    courseName:{
        type:String
    },
    courseLength:{
        type:String
    },
    fees:{
        type:Number
    }
});

module.exports = Fees = mongoose.model('fees',FeesSchema);