// https://mongoosejs.com/docs/validation.html

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)


const courseSchema = new mongoose.Schema({
    name : { 
        type : String, 
        required : true,
        minLength : 5,
        maxLength : 255
    },
    category : {
        type : String,
        required : true,
        enum :['web', 'mobile', 'network'],
        lowercase : true,
        trim : true
    },
    author : String,
    tags : {
        type : Array,
        validate : {
            validator : function(v) {
                return v.length > 0
            },
            message : 'A course should have at least one tag'
        } 
        /* validate : {
            isAsync : true,
            validator : function(v,callback){
                setTimeout(() =>{
                    const result = v && v.length > 0;
                    callback(result)
                },4000)
            },
            message : 'A course should have at least one tag'
        } */
    },
    date : { type : Date, default : Date.now},
    isPublished : Boolean,
    price : {
        type : Number,
        required : function() { return this.isPublished },
        min : 10,
        max : 200,
        get : v => Math.round(v),
        set : v => Math.round(v)
    }
});

const Course = mongoose.model('Course',courseSchema)
 
async function createCourse(){

    const course = new Course ({
        name : 'Angular Course',
        category : '-',
        //category : 'web',
        author : 'Mosh',
        //tags : [ 'Angular', 'frontend'],
        tags : [],
        isPublished : true,
        price : 15
    });
    
    try{
        //await course.validate()
        const result = await course.save();
        console.log(result)
    }
    catch(ex){
        for(field in ex.errors)
            console.log(ex.errors[field].message)
    }
    
    
}

createCourse()


async function getCourses(){
    const courses = await Course
        .find({author : 'Mosh' ,isPublished : true})
        .limit(10)
        .sort({ name : 1 })
        .select({ name : 1 , tags : 1});
    console.log(courses);
}

//getCourses();
