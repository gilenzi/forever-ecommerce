const dotenv = require('dotenv');
const app = require('./app');
const connectMongoDB = require('./config/mongodb');

dotenv.config({quiet: true});

const PORT = process.env.PORT || 3000;

connectMongoDB();

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
