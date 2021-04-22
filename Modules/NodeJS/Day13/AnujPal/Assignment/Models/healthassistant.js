const { number } = require('joi');
const mongoose = require('mongoose');
const healthAssistSchema = new mongoose.Schema({
    HAID: {
        type: Number,
        required: [true, 'You cannot keep deptID blank'],
        unique: [true, 'You cannot Enter the deptID duplicate']
    },
    HAName: {
        type: String,
        required: true,
        unique: true
    },
    DID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Department'
    },
    PID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
})

module.exports = healthAssistSchema;