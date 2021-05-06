const mongoose=require('mongoose');
const CourseSubarr=require('./models/CourseSubarr');
const Author=require('./models/Author');

mongoose.connect('mongodb://localhost/day13practice',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log("Error while connecting to mongodb..");
    }else{
        console.log("Successfully connected to mongodb..");
    }
});

async function createCourseSubarr(name,authors){
    const courseSubarr=new CourseSubarr({
        name,
        authors
    });
    const result=await courseSubarr.save();
    console.log(result);
}

async function getCoursesSubarr(){
    const coursesSubarr=await CourseSubarr
    .find();
    console.log(coursesSubarr);
}

async function addCourseSubarrAuthor(courseId,newAuthor){
    const courseSubarr=await CourseSubarr.findById(courseId);
    courseSubarr.authors.push(newAuthor);
    const result=await courseSubarr.save();
    console.log(result);
}

// createCourseSubarr("Node.js",[
//     new Author({ name:"Deepak",bio:"Deppak bio",website:"http://www.deepak.com" }),
//     new Author({ name:"Prashant",bio:"Prashant bio",website:"http://www.prashant.com" }),
//     new Author({ name:"Anil",bio:"Anil bio",website:"http://www.anil.com" }),
// ]);

addCourseSubarrAuthor('6081735f4924fa31f019afa7',new Author({name:"Rohit",bio:"empty",website:"nowebsite"}));