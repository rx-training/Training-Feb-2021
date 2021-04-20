//import modules
const mongoose = require('mongoose');
const Joi = require('joi');

const {genreSchema} = require('./gernes')

//create schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    }
})


//validate
async function validateMovie(movie) {
    try {
        const schema = {
            title: Joi.String().min(2).max(50).required(),
            genreId: Joi.objectId().required(),
            numberInStock: Joi.numer().min(0).required(),
            dailyRentalRate: Joi.numer().min(0).required()
        }

        return await Joi.validate(movie, schema);
    } catch (error) {
        console.error(error)
    }
}

//create class/model
const Movie = mongoose.model('Movie', movieSchema);

exports.Movie = Movie
exports.validate = validateMovie