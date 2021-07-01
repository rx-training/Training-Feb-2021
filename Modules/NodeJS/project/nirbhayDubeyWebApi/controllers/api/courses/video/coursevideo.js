const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const mongoose = require("mongoose");
const Course = require("../../../../models/Course");
const Coursevideo = require("../../../../models/Coursevideo");
const router = express.Router({ mergeParams: true });

//middleware for accessing findOneAndRemove
mongoose.set("useFindAndModify", false);

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/videos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage }).single("video");

class CoursevideoRoute {
  static async getCoursevideos(req, res) {
    Coursevideo.find({ cid: req.params.id })
      .then((cvideos) => {
        res.status(200).json(cvideos);
      })
      .catch((ex) => console.log(ex));
  }

  static async postCoursevideo(req, res) {
    Course.findById(req.params.id)
      .then((course) => {
        if (course) {
          upload(req, res, (error) => {
            if (error) {
              res.status(400).json({
                error: "ERROR: while uploading the video..",
              });
            } else {
              const newCoursevideo = new Coursevideo({
                cid: course._id,
                topic: req.body.topic,
                video: `uploads/videos/${req.file.filename}`,
              });
              newCoursevideo
                .save()
                .then((cvideo) => {
                  if (cvideo) {
                    res.status(200).json({
                      msg: "Video uploaded successfully..",
                      Courseppt: cvideo,
                    });
                  } else {
                    res.status(400).json({
                      error: "ERROR: while uploading the video..",
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

  static async putCoursevideo(req, res) {}

  static async deleteCoursevideo(req, res) {
    Coursevideo.findOneAndRemove({ cid: req.params.id, _id: req.params.vid })
      .then((doc) => {
        if (doc) {
          fs.unlink("./public/" + doc.video, (err) => {
            if (err) {
              res.status(400).json({
                msg: "Video deleted successfully..",
                error: "ERROR: while deleteing from directory",
                video: doc,
              });
            }
            res.status(200).json({
              msg: "Video deleted successfully..",
              video: doc,
            });
          });
        }
      })
      .catch((ex) => console.log(ex));
  }
}

router.get("/", CoursevideoRoute.getCoursevideos);
router.post("/", CoursevideoRoute.postCoursevideo);
router.put("/:vid", CoursevideoRoute.putCoursevideo);
router.delete("/:vid", CoursevideoRoute.deleteCoursevideo);

module.exports = router;
