const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  productSku: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  price: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 5,
    min: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  cart: [cartSchema],
});

module.exports = mongoose.model("User", userSchema);
