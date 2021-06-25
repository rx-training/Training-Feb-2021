const genres = require('./routes/genres');
const express = require('express');
const app = express();

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vidly', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongodb...'))
  .catch((err) => console.log("Couldn't connect to mongodb...", err))

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));