const mongoose = require("mongoose");
const Joi = require("joi");

//create schema
const techGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

techGroupSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("Tech Group must be unique"));
  } else {
    next(error);
  }
});

//create class
const TechGroup = mongoose.model("TechGroup", techGroupSchema);

//validate
async function validate(grp) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return await schema.validate(grp);
}

//exports
module.exports = {
  TechGroup,
  validate,
};
