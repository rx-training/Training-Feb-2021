const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema = new Schema({
    tags:{
        type:Array,
        validate:{
            validator:function(v){
                return v && v.length > 0;    
            },
            message:'A Course should have atleast one tag.'
        }
    },
    date:{
        type:Date,
        required:true,
        default:Date.now
    },
    name:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50
    },
    author:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30,
        uppercase:true,
    },
    isPublished:{
        type:Boolean,
        required:true
    },
    price:{
        type:Number,
        required: function (){ return this.isPublished; },
        min:5,
        max:50,
        get: v => Math.round(v),
        set: v=> Math.round(v)
    }
});

module.exports = Course = mongoose.model('course',CourseSchema);