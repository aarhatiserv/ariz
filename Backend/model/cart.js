const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
