const mongoose = require('mongoose')


const empSchema = new mongoose.Schema({

    empID:
    {
        type : Number,
        required : true
    },

    name: {
        type: String,
        required: true
    },
    
    assignments :
    {
        type : [String],
        required : true
    }

})

module.exports = mongoose.model('emp', empSchema)