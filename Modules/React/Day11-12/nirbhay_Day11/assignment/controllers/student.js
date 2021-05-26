const express = require("express");
const fs = require("fs");
const efupload = require("express-fileupload");
const Student = require("../models/Student");
const router = express.Router();

router.use(efupload());

class StudentRoute {
  static async getStudents(req, res) {
    Student.find()
      .then((students) => {
        if (!students)
          return res.status(404).json({
            error: "No students found...",
          });
        else {
          res.status(200).json(students);
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async postStudent(req, res) {
    let file1 = req.files.simg;
    let file2 = req.files.cimg;

    let simgArr = file1.name.split(".");
    let newSimgName =
      simgArr[0].replace(/ /g, "") +
      "-" +
      Math.floor(Math.random() * 1000) +
      Math.floor(Math.random() * 1000) +
      "." +
      simgArr[1];

    let cimgArr = file2.name.split(".");
    let newCimgName =
      cimgArr[0].replace(/ /g, "") +
      "-" +
      Math.floor(Math.random() * 1000) +
      Math.floor(Math.random() * 1000) +
      "." +
      cimgArr[1];

    let filepath1;
    let filepath2;
    file1.mv(`${__dirname}/../client/public/uploads/${newSimgName}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      filepath1 = `/uploads/${newSimgName}`;
    });
    file2.mv(`${__dirname}/../client/public/uploads/${newCimgName}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      filepath2 = `/uploads/${newCimgName}`;
    });

    const newStudent = new Student({
      fname: req.body.fname,
      mname: req.body.mname,
      lname: req.body.lname,
      pob: req.body.pob,
      flang: req.body.flang,
      dob: req.body.dob,
      country: req.body.country,
      state: req.body.state,
      city: req.body.city,
      ffname: req.body.ffname,
      fmname: req.body.fmname,
      flname: req.body.flname,
      fprofession: req.body.fprofession,
      fdesig: req.body.fdesig,
      fqualify: req.body.fqualify,
      fphone: req.body.fphone,
      mfname: req.body.mfname,
      mmname: req.body.mmname,
      mlname: req.body.mlname,
      mprofession: req.body.mprofession,
      mdesig: req.body.mdesig,
      mqualify: req.body.mqualify,
      mphone: req.body.mphone,
      refname: req.body.refname,
      telno: req.body.telno,
      address: req.body.address,
      cname: req.body.cname,
      simg: `/uploads/${newSimgName}`,
      cimg: `/uploads/${newCimgName}`,
    });

    newStudent
      .save()
      .then((student) => {
        if (student) {
          res.status(200).json({
            msg: "Student created successfully",
          });
        } else {
          res.status(400).json({
            error: "ERROR: while creating student",
          });
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async deleteStudent(req, res) {
    Student.findOneAndRemove({ _id: req.params.id })
      .then((student) => {
        if (student) {
          // Unlinking User Profile pic and college logo
          fs.unlink(`${__dirname}/../client/public${student.simg}`, (err) => {
            if (err) {
              console.log(err);
            }
          });
          fs.unlink(`${__dirname}/../client/public${student.cimg}`, (err) => {
            if (err) {
              console.log(err);
            }
          });

          res.status(200).json({
            msg: "Student deleted successfully..",
          });
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/student", StudentRoute.getStudents);
router.post("/student", StudentRoute.postStudent);
router.delete("/student/:id", StudentRoute.deleteStudent);

module.exports = router;
