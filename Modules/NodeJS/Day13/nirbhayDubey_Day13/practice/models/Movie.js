const mongoose=require('mongoose');
const Genre=require('./Genre');
const Schema=mongoose.Schema;

const MovieSchema=new Schema({
    title:{
        type:String,
        minlength:3,
        maxlength:100,
        required:true
    },
    genre:{
        type:Genre.schema,
        required:true
    },
    numberInStock:{
        type:Number,
        required:true,
        min:0,
        max:255
    },
    dailyRentalRate:{
        type:Number,
        required:true,
        min:0,
        max:255
    }
});

module.exports = Movie =mongoose.model('movie',MovieSchema);