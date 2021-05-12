const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoursepptSchema = new Schema({
  cid: {
    type: Schema.Types.ObjectId,
    ref: "course",
    required: true,
  },
  ppt: {
    type: String,
    required: true,
  },
  lesson: {
    type: Number,
    required: true,
  },
});

module.exports = Courseppt = mongoose.model("courseppt", CoursepptSchema);
