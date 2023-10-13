const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  productSku: {
    type: String,
  },
  size: {
    type: String,
  },
  color: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
