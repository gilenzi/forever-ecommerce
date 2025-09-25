const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRouter = express.Router();

fs.readdirSync(__dirname)
  .filter((file) => file !== 'router.js')
  .forEach((file) => {
    console.log(file);
    const route = require(path.join(__dirname, file));
    apiRouter.use(route);
  });

module.exports = {
  apiRouter,
};
