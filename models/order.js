const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  productId: Number,
  quantity: Number,
  price: Number
});

const orderSchema = new mongoose.Schema({
  orderId: String,
  value: Number,
  creationDate: Date,
  items: [itemSchema]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
