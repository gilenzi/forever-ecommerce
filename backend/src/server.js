const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const connectMongoDB = require('./config/mongodb');

const PORT = process.env.PORT || 3000;

dotenv.config();

connectMongoDB();

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
