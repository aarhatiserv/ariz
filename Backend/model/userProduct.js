const mongoose = require("mongoose");

const userProductSchema = new mongoose.Schema({
  productName: {
    type: String,
  },

  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  type: {
    type: String,
  },
  stock: {
    type: Number,
  },
  colors: {
    type: String,
  },
  description: {
    type: String,
  },
  size: {
    type: String,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
  },
  // isNewArrival: {
  //   type: Boolean,
  // },
});

module.exports = mongoose.model("userProduct", userProductSchema);
