const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
  Did: Number,
  name: String,
  bio: String,
  department: String
});
  const Doctor = mongoose.model('Doctor', doctorSchema);
  
  exports.Doctor = Doctor
  exports.doctorSchema = doctorSchema