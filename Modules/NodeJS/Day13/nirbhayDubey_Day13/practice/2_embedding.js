const mongoose=require('mongoose');
const CourseEmbedd=require('./models/CourseEmbedd');
const Author=require('./models/Author');

mongoose.connect('mongodb://localhost/day13practice',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log("Error while connecting to mongodb..");
    }else{
        console.log("Successfully connected to mongodb..");
    }
});

async function createCourseEmbedd(name,author){
    const courseEmbedd=new CourseEmbedd({
        name,
        author
    });
    const result=await courseEmbedd.save();
    console.log(result);
}

async function getCoursesEmbedd(){
    const coursesEmbedd=await CourseEmbedd
    .find();
    console.log(coursesEmbedd);
}

async function updateCourseEmbeddAuthor(courseId){
    const result=await CourseEmbedd.updateOne({ _id:courseId },{
        'author.name':'Mansi'
    });
    console.log(result);
}

// createCourseEmbedd('Python',new Author({ name:"Deepak",bio:"Deepak's bio",website:"http://www.deepak.com" }));

getCoursesEmbedd();

// updateCourseEmbeddAuthor('608152ea08520b28101f0b6a');