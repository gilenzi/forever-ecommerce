const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose
  .connect(process.env.DATABASE)
  .then((con) => {
    console.log('Connected to MONGO');
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
