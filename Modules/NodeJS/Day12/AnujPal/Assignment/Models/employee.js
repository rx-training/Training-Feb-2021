const mongoose = require('mongoose')


const empSchema = new mongoose.Schema({

    empID:
    {
        type: Number,
        min: [0, 'EmployeeID cannnot be negative']
    },

    name: {
        type: String,
        required: true,
        minlength: [4, 'The name is too sort.'],
        maxlength: [15, 'The Name is too Long try another name']
    },

    assignments:
    {
        type: Array, 
        validate: {
            validator: function (v) {
                return v && v.length > 0;
            },
            message: 'The employee should be atleast one Assignment'
        }
    }

})

module.exports = mongoose.model('emp', empSchema)