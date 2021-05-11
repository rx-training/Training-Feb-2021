//import modules
const mongoose = require('Mongoose')
const {User} = require('../Models/userModel')

//create schema
const propertySchema = new mongoose.Schema({
    User:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    Address: {
        type: String,
        required: true
    },
    Property_Type: {
        type: String,
        required: true
    },
    Bhk: {
        type: String,
        required: true
    },
    Image:{
        data:Buffer,
        ContentType:String,
        
    }
})

//create model
const Property = mongoose.model('Properties', propertySchema)

//export mmodule
module.exports = Property