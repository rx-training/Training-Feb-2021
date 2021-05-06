const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const AuthorSchema = new Schema({
    name:{
        type:String,
        minlength:3,
        maxlength:25
    },
    bio:{
        type:String,
    },
    website:{
        type:String
    }
});

module.exports = Author = mongoose.model('author',AuthorSchema);