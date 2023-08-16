const mongoose = require("mongoose");

const differentSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Different", differentSchema);
