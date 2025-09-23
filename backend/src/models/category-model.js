const mongoose = require('mongoose');
const validator = require('validator');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
    unique: true,
  },
  description: String,
  createdAt: {type: Date, default: Date.now},
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
