const mongoose = require('mongoose')

const statementSchema = new mongoose.Schema({

    date: {
        type: Date
    },
    amount: {
        type: Number
    }

})

module.exports = statementSchema;