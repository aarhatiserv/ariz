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
  size: {
    type: String,
  },
  description: {
    type: String,
  },
  information: {
    type: String,
  },
  review: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Product", newArrivalSchema);
