const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser :true, useUnifiedTopology : true })
    .then(() =>{ console.log('connected to mongoDB') }
)


const courseSchema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type : Date, default : Date.now},
    isPublished : Boolean
});

const Course = mongoose.model('Course',courseSchema)
/* 
async function createCourse(){

    const course = new Course ({
        name : 'Angular Course',
        author : 'Mosh',
        tags : [ 'Angular', 'frontend'],
        isPublished : true
    });
    
    const result = await course.save();
    console.log(result)
    
}

createCourse()

 */

async function getCourses(){
    const courses = await Course
       // .find({ author : 'Mosh', isPublished : true })
       // .find({ price : { $gte : 10, $lte : 20 } })
       // .find({ price : 10 })
       // .find({ price : { $in: [10, 15, 20] } })
        .find()
        .or([ {author : 'Mosh'}, {isPublished : true}])
        .limit(10)
        .sort({ name : 1 })
        .select({ name : 1 , tags : 1});
    console.log(courses);
}

getCourses();


async function getCourses1(){
    const courses = await Course
        
        //starts with mosh
        .find({ author : /^Mosh/ })

        //ends with hamedani
        .find({ author : /Hamedani$/i })

        //contains mosh
        .find({ author : /.*Mosh.*/i })
        .limit(10)
        .sort({ name : 1 })
        .select({ name : 1 , tags : 1});
    console.log(courses);
}

getCourses1();


async function getCourses2(){
    const courses = await Course
        .find({author : 'Mosh',isPublished : true})
        .limit(10)
        .sort({ name : 1 })
        .count()
    console.log(courses);
}

getCourses2();



async function get(){
    
    const pageNumber = 2;
    const pageSize = 10;
    
    const courses = await Course

        .find({ author : 'Mosh', isPublished : true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name : 1 })
        .select({ name : 1 , tags : 1});
    console.log(courses);
}

get();