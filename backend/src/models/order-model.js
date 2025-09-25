const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      price: {type: Number, required: [true, 'Price is required']},
    },
  ],
  totalAmount: {type: Number, required: true},
  status: {
    type: String,
    enum: ['pending', 'paid', 'shipped', 'delivered', 'canceled'],
    default: 'pending',
  },
  shippingAddress: {
    street: String,
    city: String,
    zip: String,
  },
  createdAt: {type: Date, default: Date.now()},
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
