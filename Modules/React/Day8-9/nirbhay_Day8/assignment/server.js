const express = require("express");
const efupload = require("express-fileupload");
const app = express();

app.use(efupload());

app.post("/upload", (req, res) => {
  const file = req.files.foo;
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ filename: file.name, filepath: `/uploads/${file.name}` });
  });
});

app.listen(5000, () => {
  console.log(`server is running at port no. 5000`);
});
