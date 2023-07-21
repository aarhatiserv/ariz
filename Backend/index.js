const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const userRoute = require("./router/userRoute");
const newArrival = require("./router/newArrival");

const trending = require("./router/trending");
const coupon = require("./router/coupon");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

const uri =
  "mongodb+srv://arizdatabase:FHU3RA9govcDwNbf@cluster0.sufevhr.mongodb.net/";

mongoose.connect(uri, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//Middlewares
app.use(express.json());

//Route Middlewares

app.use("/api/user", userRoute);
app.use("/api/newArrival", newArrival);
app.use("/api/trending", trending);
app.use("/api/coupons", coupon);

// Callback function to listen to changes unless manually exited.
app.listen(port, () => {
  console.log(`Welcome to the tech world at PORT: ${port}`);
});
//the end
