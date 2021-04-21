// Connectivity with mongoose
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/playground',{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(' Could not Connected to MongoDB...',err));



// Create Schemas
const studentSchema = new mongoose.Schema({

    name: String,
    author: String,
    tags:[String],
    date: {type: Date, default: Date.now},
    isPublished :Boolean
});


// Create Model
const Student = mongoose.model('Courses',courseSchema);

async function createCourse(){
    const course=new Course({
        name: 'Angular Course',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished : true
    });
    const result = await course.save();
    console.log(result);
}

createCourse();




