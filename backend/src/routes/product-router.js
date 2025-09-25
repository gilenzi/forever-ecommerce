const epxress = require('express');
const {getProducts} = require('../controllers/product-controller');

const productRouter = epxress.Router();

productRouter.get('/product', getProducts);

module.exports = productRouter;
