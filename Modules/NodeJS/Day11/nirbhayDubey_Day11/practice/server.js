const Course=require('./models/Course');
const config=require('./setup/config');
const mongoose=require('mongoose');

mongoose.connect(config.mongoURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("Connected to mongodb"))
.catch(err => console.error("Error while connecting to mongodb ",err));

//Excercise 1 practice

async function getAllPublishedCourses(){
    const courses= await Course
    .find({ isPublished:true,tags:"backend" })
    .sort({ name:1 })
    .select({ name:1,author:1 });

    console.log(courses);
} 

getAllPublishedCourses();

//Excercise 2 practice

async function getAllPublishedCourseSortByPrice(){
    const courses=await Course
    .find({ isPublished:true })
    .or([{ tags:"frontend" },{ tags:"backend" }])
    .sort({ price:-1 })
    .select({ name:1,author:1 });

    console.log("\n\n");
    console.log(courses);
}

getAllPublishedCourseSortByPrice();

//Excercise 2 practice

async function getAllPublishedCoursePriceGT115(){
    const courses=await Course
    .find({ isPublished:true })
    .or([
        {price:{ $gte:15 }},
        { name:/.*by.*/i } 
    ]);
    
    console.log("\n\n");
    console.log(courses);
}

getAllPublishedCoursePriceGT115();