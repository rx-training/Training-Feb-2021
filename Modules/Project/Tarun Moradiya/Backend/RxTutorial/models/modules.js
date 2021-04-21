const mongoose = require('mongoose');

//create schema

const moduleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: [{
        contentType: {
            type: String,
            enum: ['video', 'ppt', 'supports'],
            required: true,
            lowercase: true,
            trim: true
        },
        contentName: {
            type: String,
            required: true
        },
        contentUrl: {
            type: String,
            required: function() { 
                return this.contentType == 'video' || 'ppt'
            }
        },
        description: String,
        topic: String
    }]
});

//create class
const Module = mongoose.model('Module', moduleSchema);

//validate
async function validate(module) {
    const schema = Joi.object({
        name: Joi.string().required(),
    });

    return await schema.validate(module);
}

//exports
module.exports = {
    Day: Module,
    validate
};