const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const path = require('path');



//* connect to mongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch((err) => console.log(err));
//* setup passport
// app.use(passport.initialize());
// require('./config/passport')(passport);

const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//* set up api routes


app.listen(port, () => console.log(`server is running on port ${port}`));


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}