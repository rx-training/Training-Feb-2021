const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AssignmentSchema=new Schema({
    AssignmentCategory:{
        type:String
    },
    AssignmentId:{
        type:Number
    },
    AssignmentName:{
        type:String
    },
    AssignmentProjectedEndDate:{
        type:String
    },
    AssignmentStatus:{
        type:String
    },
    CreationDate:{
        type:String
    },
    DepartmentId:{
        type:Number
    },
    FullPartTime:{
        type:Boolean
    },
    LastUpdateDate:{
        type:String
    },
    links:{
        type:[String]
    },
    LocationId:{
        type:String
    },
    ManagerId:{
        type:String
    }
});

module.exports = Assignment = mongoose.model('assignment',AssignmentSchema);