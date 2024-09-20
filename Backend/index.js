const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const paymentRoute = require("./controller/payment");
const userRoute = require("./router/userRoute");
const newArrival = require("./router/newArrival");
const authRoute = require("./router/authRoute");
const userProduct = require("./router/userProduct");
const trending = require("./router/trending");
const product = require("./router/product");
const coupon = require("./router/coupon");
const category = require("./router/category");
const cart = require("./router/cart");
const fav = require("./router/fav");
const banner = require("./router/banner");
const banner2 = require("./router/banner2");
const orders = require("./router/orders");
const email = require("./email");
const mail = require("./mail");
const subscribe = require("./subscribe");
const Review = require("./router/Review");
const config = require("./config/config");
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const database_connection = require("./Database/Db");
if (process.env.NODE_ENV == "production") {
  console.log(
    "Development Database Connected - DB Name:" +
      database_connection.client.options.dbName
  );
} else {
  console.log(
    "Development Database Connected - DB Name: " +
      database_connection.client.options.dbName
  );
}

app.use(express.json());
app.use("/api/razorpay", paymentRoute);
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/newArrival", newArrival);
app.use("/api/userProduct", userProduct);
app.use("/api/trending", trending);
app.use("/api/product", product);
app.use("/api/coupon", coupon);
app.use("/api/category", category);
app.use("/api/cart", cart);
app.use("/api/fav", fav);
app.use("/api/banner", banner);
app.use("/api/banner2", banner2);
app.use("/api/order", orders);
app.use("/api/email", email);
app.use("/api/mail", mail);
app.use("/api/subscribe", subscribe);
app.use("/api/review", Review);
// app.use("/api/mail", ShipDetail);

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    app.listen(config.PORT || 5000);
  })
  .then(() => {
    console.log("Connected To Database and listening to localhost:5000");
  })
  .catch((err) => {
    console.log(err);
  });
