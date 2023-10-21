const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model("Fav", favSchema);
