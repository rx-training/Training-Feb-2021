const mongoose = require('mongoose');
const netBankingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
})
module.exports = netBankingSchema;