const Product = require('../models/product-model');

async function getProducts(req, res) {
  try {
    const products = await Product.find();
    res.status(200).json({
      status: 'success',
      data: {
        products,
        length: products.length,
      },
    });
  } catch (error) {
    res.status(400).json({status: 'error', msg: error});
  }
}

module.exports = {
  getProducts,
};
