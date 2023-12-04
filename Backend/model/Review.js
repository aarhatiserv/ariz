const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  remarks: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
