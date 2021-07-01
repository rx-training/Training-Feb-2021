const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  pob: {
    type: String,
    required: true,
  },
  flang: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  ffname: {
    type: String,
    required: true,
  },
  fmname: {
    type: String,
    required: true,
  },
  flname: {
    type: String,
    required: true,
  },
  fprofession: {
    type: String,
    required: true,
  },
  fdesig: {
    type: String,
    required: true,
  },
  fqualify: {
    type: String,
    required: true,
  },
  fphone: {
    type: String,
    required: true,
  },
  mfname: {
    type: String,
    required: true,
  },
  mmname: {
    type: String,
    required: true,
  },
  mlname: {
    type: String,
    required: true,
  },
  mprofession: {
    type: String,
    required: true,
  },
  mdesig: {
    type: String,
  },
  mqualify: {
    type: String,
    required: true,
  },
  mphone: {
    type: String,
    required: true,
  },
  refname: {
    type: String,
  },
  telno: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  cname: {
    type: String,
    required: true,
  },
  simg: {
    type: String,
    required: true,
  },
  cimg: {
    type: String,
    required: true,
  },
});

module.exports = Student = mongoose.model("student", StudentSchema);
