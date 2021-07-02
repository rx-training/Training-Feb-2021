const mongoose = require("mongoose");
const Joi = require("joi");
const { Technology } = require("./technology");

//create schema
const deptSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  permissions: {
    techs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technology",
      },
    ],
    tGrps: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TechGroup",
      },
    ],
  },
  // permissions: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Technology",
  //   },
  // ],
});

deptSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    next(new Error("Department must be unique"));
  } else {
    next(error);
  }
});

//create class
const Department = mongoose.model("Department", deptSchema);

//validate
async function validate(dept) {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return await schema.validate(dept);
}

//exports
module.exports = {
  Department,
  validate,
};
