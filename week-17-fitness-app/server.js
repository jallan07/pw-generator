// ============================
// GENERAL
// ============================
// app dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const compression = require('compression');

// set the port variable
const PORT = process.env.PORT || 3030;

// compression npm package middleware
app.use(compression());

// ============================
// DATABASE
// ============================
// require the models folder
const db = require('./models');

// establish a connection to the database || use the env variable first to look within heroku for the mongo database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// ============================
// MIDDLEWARE
// ============================
// general middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use static files middleware
app.use(express.static('public'));

// ============================
// ROUTES
// ============================
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

// ============================
// SERVER
// ============================
// start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
