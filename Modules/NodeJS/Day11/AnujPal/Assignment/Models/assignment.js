const mongoose = require('mongoose');


const assignmentSchema = new mongoose.Schema({

    aid :
    {
        type : Number,
        required : true
    },
    empID:
    {
        type: Number,
        required: true
    },

    status: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Assignment1', assignmentSchema)