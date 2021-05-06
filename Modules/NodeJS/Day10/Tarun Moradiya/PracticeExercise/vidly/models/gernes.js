const Joi = require('joi');
const mongoose = require('mongoose');


// const genres = [
//   { id: 1, name: 'Action' },  
//   { id: 2, name: 'Horror' },  
//   { id: 3, name: 'Romance' },  
// ];

// const genreSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 50
//   }
// })

// const Genre = mongoose.model('Genre', genreSchema)


const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    }
  }))

function validateGenre(genre) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(genre, schema);
}

exports.Genre = Genre;
exports.validate = validateGenre;