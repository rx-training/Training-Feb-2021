const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost/nodedemo',{useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>console.log('Connecting to mongodb'))
.catch(err=>console.error('Could not connect',err))

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:Date,
    isPublished:Boolean,
    Price:Number
})

const Course = mongoose.model('courses',courseSchema)

async function getCourses(){
    const courses = await Course
    .find({isPublished:true,})
    .or([{tags:'backend'},{tags:'frontend'}])
    .sort({price:-1})
    .select('name autor price')
    console.log(courses)
}

getCourses();