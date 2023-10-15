const mongoose = require("mongoose");

const userProductSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  subcategory: {
    type: String, // You can change the data type to match your requirements
  },
  subcategory1: {
    type: String, // You can change the data type to match your requirements
  },

  type: {
    type: String,
  },
  stock: {
    type: Number,
  },
  productSku: {
    type: String,
  },
  imageUrl: {
    type: String,
  },

  size: {
    type: String,
  },
  variant: [
    {
      productName: {
        type: String,
      },
      price: {
        type: Number,
      },
      mrp: {
        type: Number,
      },
      color: {
        type: String,
      },
      description: {
        type: String,
      },
      additional: {
        type: String,
      },
      image: [
        {
          type: String,
        },
      ],
      masterSku: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("userProduct", userProductSchema);
