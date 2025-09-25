const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
