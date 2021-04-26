const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

//Embadding documents / sub documents - can not be saved on their own -> + PERFORMANCE

// const authorSchema = new mongoose.Schema({
//   name: String,
//   bio: String,
//   website: String
// });

// const Author = mongoose.model('Author', authorSchema);

// const Course = mongoose.model('Course', new mongoose.Schema({
//   name: String,
//   author: authorSchema
// }));

//validation

// const authorSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   bio: String,
//   website: String
// });

// const Author = mongoose.model('Author', authorSchema);

// const Course = mongoose.model('Course', new mongoose.Schema({
//   name: String,
//   author: {
//     type: authorSchema,
//     required: true
//   }
// }));

//array of sub documents

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
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

async function updateAuthor(id) {
  // let course = await Course.findById(id);
  // course.author.name = 'Tarun';
  // course = await course.save();

  let course = await Course.update({_id: id}, {
    // $set: {
    //   'author.name': 'Tarun Moradiya'
    // }

    $unset: {
      'author': ''
    }
  });

  console.log(course)
}

async function addAuthor(courseId, author) {
  let course = await Course.findById(courseId);
  course.authors.push(author);
  course = await course.save();
  console.log(course);
}

async function removeAuthor(courseId, authorId) {
  let course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course = await course.save();
  console.log(course);
}

// createCourse('Node Course', new Author({ name: 'Mosh' }));

// updateAuthor('60795438220b9851286e7bc2')

// createCourse('Node Course', [
//   new Author({ name: 'Mosh' }),
//   new Author({ name: 'Tarun' })
// ]);

// addAuthor('60795438220b9851286e7bc2', new Author({ name: 'John' }))

removeAuthor('60795438220b9851286e7bc2','607958c5923b268ff4c872f2')