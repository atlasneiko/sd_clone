const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
//* connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello world!"));
const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));