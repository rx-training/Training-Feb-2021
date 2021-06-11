const path = require("path");

const multer = require("multer");

// const upload = multer({ dest: 'uploads/' });
//for adding files -  enctype="multipart/form-data"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
