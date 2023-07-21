const mongoose = require("mongoose");

const newArrivalSchema = new mongoose.Schema({
  productName: {
    type: String,
  },

  category: {
    type: String,
  },
  price: {
    type: Number,
  },

  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Product", newArrivalSchema);
