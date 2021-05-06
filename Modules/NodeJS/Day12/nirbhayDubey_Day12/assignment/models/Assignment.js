const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AssignmentSchema=new Schema({
    AssignmentCategory:{
        type:String,
        required:true
    },
    AssignmentId:{
        type:Number,
        required:true
    },
    AssignmentName:{
        type:String,
        required:true
    },
    AssignmentProjectedEndDate:{
        type:String,
        required:true
    },
    AssignmentStatus:{
        type:String,
        required:true
    },
    CreationDate:{
        type:String,
        required:true
    },
    DepartmentId:{
        type:Number,
        required:true
    },
    FullPartTime:{
        type:Boolean,
        required:true
    },
    LastUpdateDate:{
        type:String,
        required:true
    },
    links:{
        type:[String]
    },
    LocationId:{
        type:String,
        required:true
    },
    ManagerId:{
        type:String,
        required:true
    }
});

module.exports = Assignment = mongoose.model('assignment',AssignmentSchema);