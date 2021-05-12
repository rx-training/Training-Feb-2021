const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CoursevideoSchema=new Schema({
    cid:{
        type:Schema.Types.ObjectId,
        ref:'course',
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    }
});

module.exports = Coursevideo = mongoose.model('coursevideo',CoursevideoSchema);