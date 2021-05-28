const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/nodedemo',{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=> console.log('Connecting to MongoDB...'))
.catch(err=>console.error('Could not connect to mongodb',err));

console.log('hello')
const courseSchema = new mongoose.Schema({

    name:String,
    author:String,
    tags:[String],
    date:Date,
    isPublished:Boolean,
    Price:Number
});
const Course =mongoose.model('Courses',courseSchema);
console.log('Yes cursor comes')
async function getCourses(){
    const courses =await Course
        .find({isPublished:true, tags:'backend'})
        .sort({name:1})
        .select({name:1,author:1})
        console.log(courses)
}

getCourses();
 
