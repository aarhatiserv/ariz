const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Banner", bannerSchema);
