const mongoose = require('mongoose')


const statementSchema = new mongoose.Schema({

    date: {
        type: Date
    },
    amount: {
        type: Number
    },
    debitAccountNo:{
        type:Number
    },
    creditAccountNo:{
        type:Number
    },
    type:{
        type:String
    }


})

module.exports = statementSchema;