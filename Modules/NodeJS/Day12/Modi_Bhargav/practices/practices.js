const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to mongoDB...", err))

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/
  },
  author: {
    type: String,
    required: true,
    enum: ["joy", "meet", "bhargav"],
    lowercase: true,
    // uppercase:true,
    trim: true
  },
  tags: {
    type: Array,
    validate: {
      isAsync:true,
      validator: function (v,callback) {
        setTimeout(() => {
          const result = v.length > 0;
          callback(result)
        }, 3000)
      },
      message: 'A Course latest One String'
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  phoneNumber: {
    type: Number,
    validate: {
      validator: function (v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} please your phone number length max 10 Number`
    },
    required: [true, 'User phone number required']
  },
  price: {
    type: Number,
    required: () => {
      return this.isPublished
    },
    min: 10,
    max: 200,
    get: v => Math.round(v),
    set: v => Math.round(v)
  },
  isPublished: {
    type: Boolean,
    required: true
  }
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {


  const course = new Course({
    name: 'Angular',
    author: 'meet',
    tags: [],
    phoneNumber:9924342506,
    isPublished: false,
    price: 11.5
  })
  try {
    // method1
    const result = await course.save()
    console.log(result)

    //  method2
    /*const isValid = await Course.validate()
    if(!isValid){
    }*/

    // method3
    /*Course.validate((err) => {
      if(err){}
    })*/
  }
  catch (ex) {
    // console.log(ex.message)
    for(let field in ex.errors){
      console.log(ex.errors[field].message)
    }
  }

}
createCourse()
