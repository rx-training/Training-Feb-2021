const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({

    tags:{
        type:String,
    },
    date:{
        type:Date
    },
    name:{
        type:String
    },
    author:{
        type:String
    },
    isPublished:{
        type:Boolean
    },
    price:{
        type:Number
    }
});

module.exports = Course = mongoose.model('course',CourseSchema);
