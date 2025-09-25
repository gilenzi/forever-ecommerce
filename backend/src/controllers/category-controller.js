const Category = require('../models/category-model');

async function createCategory(req, res) {
  const {name, description} = req.body;

  try {
    const newCategory = await Category.create({name, description});
    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory,
      },
    });
  } catch (error) {
    res.status(400).json({status: 'error', message: error});
    console.log('Error creating category:', error);
  }
}

async function getCategories(req, res) {
  try {
    const categories = await Category.find();
    res.status(200).json({
      status: 'success',
      data: {
        categories,
      },
    });
  } catch (error) {
    res.status(400).json({status: 'error', message: error});
  }
}

async function updateCategory(req, res) {
  const {id} = req.params;
  const {name, description} = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      {$set: {name, description}},
      {new: true, runValidators: true, returnDocument: true}
    );
    res.status(200).json({
      status: 'success',
      data: {
        updatedCategory,
      },
    });
  } catch (error) {
    res.status(400).json({status: 'error', message: error});
  }
}

async function deleteCategory(req, res) {
  const {id} = req.params;
  try {
    const deleteCategory = await Category.findByIdAndDelete(id);
    res.status(200).json({status: 'success', data: {category: deleteCategory}});
  } catch (error) {
    res.status(400).json({status: 'error', message: error});
  }
}

module.exports = {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
