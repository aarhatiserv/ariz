const express = require("express");
const router = express.Router();
const Banner = require("../model/banner");

router.get("/banner", (req, res) => {
  Banner.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.post("/banner", (req, res) => {
  const { category, imageUrl } = req.body;

  const product = new Banner({
    category,
    imageUrl,
  });

  product.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.", err);
    } else {
      res.send("Product added successfully.");
    }
  });
});

module.exports = router;
