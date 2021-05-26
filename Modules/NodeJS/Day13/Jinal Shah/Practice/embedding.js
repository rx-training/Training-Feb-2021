const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser :true, useUnifiedTopology : true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors : [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function addAuthor(courseId, author){
  const course = await Course.findById(courseId)
  course.authors.push(author);
  course.save()
}

//addAuthor('60803e792682d837e067e695',new Author({ name : 'Amy'}))

async function removeAuthor(courseId , authorId){
  const course = await Course.findById(courseId)
  const author = course.authors.id(authorId);
  author.remove();
  course.save()
}

removeAuthor('60803e792682d837e067e695', '608040f7102d9a34f84e22a1')

/* createCourse('Node Course', [
  new Author({ name: 'Mosh' }),
  new Author({ name: 'John' })
]); */

/* async function updateAuthor(courseId){
  const course = await Course.findById(courseId)
  course.author.name = 'Mosh Hamedani';
  course.save()
} */

async function updateAuthor(courseId){
  const course = await Course.update({ _id: courseId },{
    $unset : {
      'author' : ''
    }
  });
}

//updateAuthor('60803814837d0435844c570b')
