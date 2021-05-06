const mongoose=require('mongoose');
const Author=require('./Author');
const Schema=mongoose.Schema;

const AuthorSchema = new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:25
    },
    bio:{
        type:String,
    },
    website:{
        type:String
    }
});

const CourseSubarrSchema=new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:40
    },
    authors:{
        type:[AuthorSchema]
    }
});

module.exports = CourseSubarr= mongoose.model('coursesubarr',CourseSubarrSchema);