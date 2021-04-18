const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodedemo',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Coonected to monodb'))
.catch(err=>console.error('Could not connect',err))

const courseSchema = new mongoose.Schema({

    name:String,
    author:String,
    tags:[String],
    date:Date,
    isPublished:Boolean,
    Price:Number
})

const Course  = mongoose.model('Courses',courseSchema)

async function getCourses(){
    const courses = await Course
    .find()
    .or([
        {price:{$gte:15}},
    {name:/.*by.*/i}
    ])
    console.log(courses)
}

getCourses();