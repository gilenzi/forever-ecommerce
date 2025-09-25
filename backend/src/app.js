const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const app = express();
const {apiRouter} = require('./routes/router');

dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// //Middlewars
app.use(cors());

app.use(express.json()); // parse JSON bodies

app.use('/api', apiRouter);

module.exports = app;
