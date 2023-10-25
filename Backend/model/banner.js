const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
