const express = require('express');
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require('../controllers/category-controller');

const categoryRouter = express.Router();

categoryRouter.post('/category', createCategory);
categoryRouter.get('/category', getCategories);
categoryRouter.patch('/category/:id', updateCategory);
categoryRouter.delete('/category/:id', deleteCategory);

module.exports = categoryRouter;
