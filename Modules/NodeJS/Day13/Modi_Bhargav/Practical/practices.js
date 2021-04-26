const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Udemy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
})

const Author = mongoose.model('Author', authorSchema)

const courseSchema = new mongoose.Schema({
  name: String,
  // author: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Author'
  // }
  // author:
  // {
  //   type: authorSchema,
  //   required: true
  // }
  author:[authorSchema]
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  })
  const result = await course.save()
  console.log(result)
}

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website
  })

  const result = await author.save()
  console.log(result)
}

async function listCourse() {
  const courses = await Course
    .find()
    .populate('author', 'name -_id')
    .select('name author')
  console.log(courses)
}

async function updateCourse(courseId) {
  const course = await Course.findById(courseId)
  course.author.name = "Mosh Hemdani";
  course.save()
}

async function addAuthor(courseId,author) {
  const course = await Course.findById(courseId)
  course.author.push(author)
  course.save()
  console.log(course)
}

async function removeAuthor(courseId,authorId) {
  const course = await Course.findById(courseId)
  const author = course.author.id(authorId)
  author.remove()
  course.save()
  console.log(course)
}

// createAuthor("Mosh", "My Bio", "Mosh.com")
// createCourse("Node Js", [new Author({ name:"Jhon"}),new Author({ name:"Delta"})])

// listCourse()
// addAuthor("607fae9e5db7102064634d78",new Author({ name:"Amy"}))

// updateCourse("607fa7952c492d22a0269eb5")
removeAuthor('607fae9e5db7102064634d78','607faef9683ca23704a6654f')
