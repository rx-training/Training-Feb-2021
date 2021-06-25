const mongoose = require('mongoose');
const Technology = require('./technologies');

//create schema

const daySchema = new mongoose.Schema({
    tech: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Technology'
    },
    name: {
        type: String,
        required: true
    },
    whatToLearn: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'data required in what to learn'
        }
    },
    practiceExercise: {
        type: Array,
        validate: {
            validator: function(v) {
                return v;
            },
            message: 'Can not enter null in practice Exercise'
        }
    },
    assignments: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'Can not enter null in Assignments'
        }
    }
});

//create class
const Day = mongoose.model('Day', daySchema);

//validate
async function validate(day) {
    const schema = Joi.object({
        tech: Joi.string().required(),
        name: Joi.string().required(),
        whatToLearn: Joi.array().required(),
        practiceExercise: Joi.array(),
        assignments: Joi.array()
    })
}

//exports
module.exports = {
    Day,
    validate
}