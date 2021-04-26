const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playgroud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('could not connect to mongodb...', err))

//schema defined shape/structure of collections
const courseSchema = new mongoose.Schema ({
    name: String,
    auther: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

//model is used to make class of the schema so we can create objects based on that
const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    // const course = new Course({
    //     name: 'Node.js Course',
    //     auther: 'Tarun Moradiya',
    //     tags: ['node', 'backend'],
    //     isPublished: true
    // })

    const course = new Course({
        name: 'Angular Course',
        auther: 'Tarun Moradiya',
        tags: ['angular', 'frontend'],
        isPublished: true
    })
    
    const result = await course.save()
    console.log(result)
}

async function getCourses() {
    // const courses = await Course.find()

    const pageNumber = 2
    const pageSize = 10

    //api/courses/?pageNumber=2&pageSize=10

    const courses = await Course
        .find({ auther: 'Tarun Moradiya', isPublished: true})
        .skip((pageNumber - 1) * pageSize)
        // .limit(10)
        .limit(pageSize)
        .sort({ name: 1 })
        // .select({ name: 1, tags: 1 })
        .countDocuments()
    console.log(courses)
}

async function updateCourse(id) {
    //Approach: Query first 
    //findById
    //modify its properties
    //save()

    // const course = await Course.findById(id)
    // if(!course) return;

    // course.isPublished = false
    // course.auther = 'Another Auther'

    // course.set({
    //     isPublished: false,
    //     auther: 'Another Auther'
    // })

    // const result = await course.save()
    // console.log(result)

    //Approach: Update first
    //update directly
    //optional: get the updated document

    // const course = await Course.update({isPublished: false})//for multiple records

    // const result = await Course.update({_id: id}, {
    //     //mongodb update operators
    //     $set: {
    //         auther: 'Mosh',
    //         isPublished: false
    //     }
    // })

    // console.log(result)

    const course = await Course.findByIdAndUpdate({_id: id}, {
        //mongodb update operators
        $set: {
            auther: 'John',
            isPublished: true
        }
    }, {new: true})

    console.log(course)
}

async function removeCourse(id) {
    // const result = await Course.deleteOne({ _id: id })
    // const result = await Course.deleteMany({ _id: id })
    const course = await Course.findByIdAndRemove(id)
    
    // console.log(result)
    console.log(course)
}

// createCourse()
// getCourses()
// updateCourse('607572de170cfe74648ef0c4')
removeCourse('607572de170cfe74648ef0c4')

/*comparision operators in mongodb*/

// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in)

//.find({ price: { $gt: 10, $lte: 20 } })
//.find({ price: { $in: [ 10, 20, 30 ] } })

/* logical operators */

//or
//and

//.find()
//.or( [ { auther: 'Tarun' }, { published: true } ] )

/* regEx */
//.find({name: /patter/gi})

//collection.count is deprecated, and will be removed in a future version. Use Collection.countDocuments or Collection.estimatedDocumentCount instead