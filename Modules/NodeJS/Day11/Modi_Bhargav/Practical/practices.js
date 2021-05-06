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


async function getCourses() {

  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)
  // or
  // and

  // /api/course?pageNumber=2&pageSize=10
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })
    //  .find({ price: {$gte: 1, $lte: 10} })
    // .find({price: { $in: [5, 15, 20]}})
    // .or([ { author: "Mosh" }, { isPublished: true } ])
    // .and([{ author: "Mosh" }, { isPublished: true }])

    // Starts with Node
    // .find({ name: /^Node/})

    // Ends with Course
    // .find({ name: /Course$/i })

    // Contains middle value to find data
    // .find({ name: /.*lar.*/i })

    // count the total objects
    // .count()

    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
  //  .sort({ name: 1})
  //  .select({ name: 1, tags: 1});
  console.log(courses)
}

async function updateCourse(id) {
  // method1
  /*const course = await Course.findById(id);
  if(!course) return;

  course.isPublished = false;
  course.author = "Another Author";

  const result = await course.save();
  console.log(result);*/

  // Method2

  /*const result = await Course.update({_id:id},{
    $set: {
      author: 'Mosh',
      isPublished: true
    }
  });
  console.log(result)*/

  // method3

  const result = await Course.findByIdAndUpdate(id, {
    $set: {
      author: 'Jhon',
      isPublished: false
    }
  }, { new: true });
  console.log(result)
}

// updateCourse("60798fdbef13ba61b0caa7b9")

async function removeCourse(id) {
  // method 1
  // const result = await Course.deleteOne({_id:id});
  // method 2
  const result = await Course.findByIdAndDelete(id);

  console.log(result)
}
removeCourse("60798fdbef13ba61b0caa7b9")