const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const Course = require("../../../../models/Course");
const Courseppt = require("../../../../models/Courseppt");
const router = express.Router({ mergeParams: true });

//middleware for accessing findOneAndRemove
mongoose.set("useFindAndModify", false);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/ppts");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage }).single("ppt");

class CoursepptRoute {
  static async getCourseppts(req, res) {
    Courseppt.find({ cid: req.params.id })
      .then((cppts) => {
        res.status(200).json(cppts);
      })
      .catch((ex) => console.log(ex));
  }

  static async postCourseppt(req, res) {
    Course.findById(req.params.id)
      .then((course) => {
        if (course) {
          upload(req, res, (error) => {
            if (error) {
              res.status(400).json({
                error: "ERROR: while uploading the ppt..",
              });
            } else {
              const newCourseppt = new Courseppt({
                cid: req.params.id,
                ppt: `uploads/ppts/${req.file.filename}`,
                lesson: req.body.lesson,
              });
              newCourseppt
                .save()
                .then((cppt) => {
                  if (cppt) {
                    res.status(200).json({
                      msg: "PPT uploaded successfully..",
                      Courseppt: cppt,
                    });
                  } else {
                    res.status(400).json({
                      error: "ERROR: while uploading the ppt..",
                    });
                  }
                })
                .catch((ex) => console.log(ex));
            }
          });
        } else {
          res.status(404).json({
            error: "Course with the given Id was not found..",
          });
        }
      })
      .catch((ex) => console.log(ex));
  }

  static async putCourseppt(req, res) {}

  static async deleteCourseppt(req, res) {
    Courseppt.findOneAndRemove({ cid: req.params.id, _id: req.params.pid })
      .then((doc) => {
        if (doc) {
          fs.unlink("./public/" + doc.ppt, (err) => {
            if (err) {
              res.status(400).json({
                msg: "PPT deleted successfully..",
                error: "ERROR: while deleteing from directory",
                ppt: doc,
              });
            }
            res.status(200).json({
              msg: "PPT deleted successfully..",
              ppt: doc,
            });
          });
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/", CoursepptRoute.getCourseppts);
router.post("/", CoursepptRoute.postCourseppt);
router.put("/:pid", CoursepptRoute.putCourseppt);
router.delete("/:pid", CoursepptRoute.deleteCourseppt);

module.exports = router;
