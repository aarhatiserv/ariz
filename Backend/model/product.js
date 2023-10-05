const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Item", productSchema);
