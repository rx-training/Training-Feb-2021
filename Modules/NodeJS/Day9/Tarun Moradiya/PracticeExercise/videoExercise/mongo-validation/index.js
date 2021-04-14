const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongodb...'))
    .catch(err => console.log('could not connect to mongodb...', err))

const courseSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 255,
        // match: /pattern/
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,//converts automatically
        // uppercase: true,
        trim: true
    },
    auther: String,
    // tags: [String],
    tags: {
        type: Array,

        // validate: {
        //     validator: function(v) {
        //         return v && v.length > 0;
        //     },
        //     message: 'A course should have atleast one tag'
        // }

        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    //do some async work
                    const result = v && v.length > 0;
                    callback(result)
                }, 2000);
            },
            message: 'A course should have atleast one tag'
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function()  {return this.isPublished;},//arrow function will not work here because they don't have this
        min: 10,
        max: 200,
        get: v => Math.round(v),//called when getting value of this property from database 
        set: v => Math.round(v) //called when setting value of this property to database
    }
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        category: 'Web',
        auther: 'Tarun Moradiya',
        // tags: [],
        tags: ['frontend'],
        isPublished: true,
        price: 15.8
    })
    
    try {
        // await course.validate((err)=>{})

        const result = await course.save()
        console.log(result)

    } catch (exeption) {
        // console.log('Exeption: ', exeption.message)
        for(field in exeption.errors) {
            console.log(exeption.errors[field].message)
        }
    }
}

createCourse()