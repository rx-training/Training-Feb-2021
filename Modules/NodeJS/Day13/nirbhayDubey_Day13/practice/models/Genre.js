const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const GenreSchema=new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:30,
        required:true
    }
});

module.exports = Genre = mongoose.model('genre',GenreSchema);