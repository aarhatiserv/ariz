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
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://arizdatabase:FHU3RA9govcDwNbf@cluster0.sufevhr.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

//Route Middlewares
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
// app.use("/api/mail", ShipDetail);

// Callback function to listen to changes unless manually exited.
app.listen(port, () => {
  console.log(`Welcome to the tech world at PORT: ${port}`);
});
//the end
