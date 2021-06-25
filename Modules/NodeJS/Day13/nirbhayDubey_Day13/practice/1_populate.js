const mongoose=require('mongoose');
const Course=require('./models/Course');
const Author=require('./models/Author');

mongoose.connect('mongodb://localhost/day13practice',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log("Error while connecting to mongodb..");
    }else{
        console.log("Successfully connected to mongodb..");
    }
});

async function createCourse(name,author){
    const course=new Course({
        name,
        author
    });
    const result=await course.save();
    console.log(result);
}

async function createAuthor(name,bio,website){
    const author=new Author({
        name,
        bio,
        website
    });
    const result=await author.save();
    console.log(result);
}

async function getCourses(){
    const courses=await Course
    .find()
    .populate('author','name -_id');
    console.log(courses);
}

// createAuthor('Manish','My Biodata','http://www.myweb.com');

// createCourse('Express.js',"60812bcc112bc61290e16752");

getCourses();
