const mongoose=require('mongoose');
const Author=require('./Author');
const Schema=mongoose.Schema;

const CourseEmbeddSchema=new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:40
    },
    author:{
        type:Author.schema,
        required:true
    }
});

module.exports = CourseEmbedd = mongoose.model('courseEmbedd',CourseEmbeddSchema);