const mongoose = require("mongoose");

const trendingSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Trending", trendingSchema);
