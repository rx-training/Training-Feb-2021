const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({

    aid:
    {
        type: Number,
        required: [true, 'You cannot leave the assignmentID'],
        unique: true
    },
    empID:
    {
        type: Number,
        required: [true, 'You cannot leave the empID']
    },

    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'

    }

});

module.exports = mongoose.model('Assignment1', assignmentSchema)