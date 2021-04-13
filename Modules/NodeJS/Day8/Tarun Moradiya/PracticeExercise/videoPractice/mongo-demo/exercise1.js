
//mongoimport --db mongo-exercises --collection courses --drop --file exercise-data.json --jsonArray

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('could not connect to mongodb...', err))

const courseSchema = new mongoose.Schema({
    name: String,
    auther: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function getCourses() {
    //get all the published backend courses sort by name only get name and author field
    // return await Course
    //     .find({ isPublished: true, tags: 'backend' })
    //     .sort({ name: 1 })
    //     .select({ name:1, author:1 })

    //get all the published frontend and backend courses short by price in decending ourder pick only name and auther
    // return await Course
    //     .find({ isPublished: true, tags: { $in : [ 'backend' , 'frontend' ] } })
    //     .sort({ price: -1 }) //.sort('-price')
    //     .select({ name:1, author:1 }) //.select('name auther')

        // can also use or([{tags: 'frontend'}, tags: 'backend'])

    //get all the published courses that are $15 or more or have word by in their title
    return await Course
        .find({ isPublished: true})
        .or([ { price: { $gte: 15 } },{ name: /.*by.*/i }  ])


}

async function run() {
    const courses = await getCourses()
    console.log(courses)
}

run()