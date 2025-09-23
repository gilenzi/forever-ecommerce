const express = require('express');
const cors = require('cors');
const {apiRouter} = require('./routes/router');

const app = express();

// //Middlewars
app.use(cors());

app.use(express.json()); // parse JSON bodies

app.use('/api', apiRouter);

module.exports = app;
