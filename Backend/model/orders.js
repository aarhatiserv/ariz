const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  productName: String,
  productId: String,
  quantity: Number,
  price: Number,
  // ... other fields as needed
});

const orderSchema = new mongoose.Schema({
  userDetails: {
    name: String,
    email: String,
    address: String,
    state: String,
    orderDate: String,

    zip: String,
  },
  totalPrice: Number,
  orderId: Number,
  userId: mongoose.SchemaTypes.ObjectId,
  orderItems: [orderItemSchema], // Embed the orderItemSchema
});

const OrderItem = mongoose.model("OrderItem", orderItemSchema);
const Order = mongoose.model("Order", orderSchema);

module.exports = { OrderItem, Order };
