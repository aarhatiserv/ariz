const mongoose = require("mongoose");

const subcategory1Schema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subcategories1: [subcategory1Schema],
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subcategory: [subcategorySchema],
});

const differentSchema = new mongoose.Schema({
  category: categorySchema,
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Different", differentSchema);
