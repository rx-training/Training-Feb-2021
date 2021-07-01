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

  static async moveFiles(file) {
    let imgArr = file.name.split(".");
    let newImgName =
      imgArr[0].replace(/ /g, "") +
      "-" +
      Math.floor(Math.random() * 1000) +
      Math.floor(Math.random() * 1000) +
      "." +
      imgArr[1];

    file.mv(`${__dirname}/../client/public/uploads/${newImgName}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    return newImgName;
  }

  static async deleteFiles(filepath) {
    fs.unlink(`${__dirname}/../client/public${filepath}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  static async postStudent(req, res) {
    let file1 = req.files.simg;
    let file2 = req.files.cimg;

    const newSimgName = await StudentRoute.moveFiles(file1);
    const newCimgName = await StudentRoute.moveFiles(file2);

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
            msg: "ERROR: while creating student",
          });
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async putStudent(req, res) {
    Student.findById(req.params.id)
      .then(async (student) => {
        if (student) {
          const upStudent = student;
          if (req.files) {
            // If files changed
            if (req.files.simg && req.files.cimg) {
              StudentRoute.deleteFiles(student.simg);
              StudentRoute.deleteFiles(student.cimg);

              const newSimgName = await StudentRoute.moveFiles(req.files.simg);
              const newCimgName = await StudentRoute.moveFiles(req.files.cimg);

              upStudent.set({
                ...req.body,
                simg: `/uploads/${newSimgName}`,
                cimg: `/uploads/${newCimgName}`,
              });
            } else if (req.files.simg) {
              StudentRoute.deleteFiles(student.simg);

              const newSimgName = await StudentRoute.moveFiles(req.files.simg);

              upStudent.set({
                ...req.body,
                simg: `/uploads/${newSimgName}`,
              });
            } else {
              StudentRoute.deleteFiles(student.cimg);

              const newCimgName = await StudentRoute.moveFiles(req.files.cimg);
              upStudent.set({
                ...req.body,
                cimg: `/uploads/${newCimgName}`,
              });
            }
          } else {
            // If files not changed
            upStudent.set(req.body);
          }

          upStudent
            .save()
            .then((upstu) => {
              if (upstu) {
                res.status(200).json({
                  msg: "Student updated successfully",
                });
              } else {
                res.status(400).json({
                  msg: "ERROR: while updating student",
                });
              }
            })
            .catch((ex) => console.log(ex));
        } else {
          res.status(400).json({
            msg: "No Student available with given Id.",
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
          StudentRoute.deleteFiles(student.simg);
          StudentRoute.deleteFiles(student.cimg);

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
router.put("/student/:id", StudentRoute.putStudent);
router.delete("/student/:id", StudentRoute.deleteStudent);

module.exports = router;
