const mongoose = require("mongoose");

const differentSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  subcategory: {
    type: String, // You can change the data type to match your requirements
  },
  subcategory1: {
    type: String, // You can change the data type to match your requirements
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Different", differentSchema);
