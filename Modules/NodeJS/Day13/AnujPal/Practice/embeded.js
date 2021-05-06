const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
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
    author: authorSchema
}));

async function createCourse(name, author) {
    const course = new Course({
        name,
        author
    });

}

async function updateCOurce(courceID) {
    const cource = await Course.update({ _id: courceID }, {
        $set: {
            'author.name': 'Anuj Pal'
        }
    });
    console.log(cource);

}




async function listCourses() {
    const courses = await Course.find();
    console.log(courses);
}

createCourse('Node Course', new Author({ name: 'Mosh' }));
updateCOurce('607f40d22f6b5a1d34c1070a');