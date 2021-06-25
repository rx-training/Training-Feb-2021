const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {
    type: Date,
    default: Date.now
  },
  price: Number,
  isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {


  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['Angular', 'forntend'],
    isPublished: true,
    price: 5
  })

  const result = await course.save()
  console.log(result)
}

createCourse()
