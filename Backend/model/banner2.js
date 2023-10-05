const mongoose = require("mongoose");

const banner2Schema = new mongoose.Schema({
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Banner2", banner2Schema);
