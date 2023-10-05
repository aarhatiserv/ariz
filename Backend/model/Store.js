const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: String,
  // Add more fields as needed
  wallet: [
    {
      paymentMade: Date,
      // Add more payment-related fields here
    },
  ],
  one24coin: Number,
  // Add other fields as needed
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
