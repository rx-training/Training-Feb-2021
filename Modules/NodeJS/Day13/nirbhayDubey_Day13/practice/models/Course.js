const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:40
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'author'
    }
});

module.exports = Course = mongoose.model('course',CourseSchema);