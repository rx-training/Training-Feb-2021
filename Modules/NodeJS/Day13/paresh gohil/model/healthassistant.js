const mongoose = require("mongoose")

const healthSchema = new mongoose.Schema({
  Aid: Number,
  name: String,
  bio: String,
  department: String
});

const Assistant = mongoose.model('Assistant', healthSchema);

  exports.healthSchema = healthSchema
  exports.Assistant = Assistant