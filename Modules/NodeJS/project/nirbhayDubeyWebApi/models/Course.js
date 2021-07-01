const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum:['Common','FrontEnd','BackEnd'],
        required:true
    }
});

module.exports = Course = mongoose.model('course',CourseSchema);