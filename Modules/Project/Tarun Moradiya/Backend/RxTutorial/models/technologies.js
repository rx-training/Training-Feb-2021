const mongoose = require('mongoose');
const Joi = require('joi');

const Day = require('./days');
const moduleSchema = require('./modules');

//create schema

const techSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    techType: {
        type: String,
        enum: ['frontend', 'backend', 'common'],
        required: true,
        lowercase: true,
        trim: true
    },
    ppts: [moduleSchema],
    videos: [moduleSchema],
    supports: [moduleSchema],
});

//create class
const Technology = mongoose.model('Technology', techSchema);

//validate tech
async function validateTech(tech) {
    const schema = Joi.object({
        name: Joi.string().required(),
        techType: Joi.string().valid('frontend', 'backend', 'common').required(),
        modules: Joi.array().items(Joi.object({
            topic: Joi.string(),
                contents: Joi.array().items(Joi.object({
                    contentName: Joi.string(),
                    contentUrl: Joi.string(),
                    description: Joi.string(),
                }))
        })),
    });

    return await schema.validate(tech);
}

//validate module
async function validateModule(tech) {
    const schema = Joi.object({
        topic: Joi.string(),
        contents: Joi.array().items(Joi.object({
            contentName: Joi.string(),
            contentUrl: Joi.string(),
            description: Joi.string(),
        }))
    });

    return await schema.validate(tech);
}

//validate content
async function validateContent(tech) {
    const schema = Joi.object({
        contentName: Joi.string(),
        contentUrl: Joi.string(),
        description: Joi.string(),
    });

    return await schema.validate(tech);
}

//exports
module.exports = {
    Technology,
    validateTech,
    validateModule,
    validateContent
};