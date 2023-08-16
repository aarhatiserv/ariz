const express = require("express");
const router = express.Router();
const Banner2 = require("../model/banner2");

router.get("/banner2", (req, res) => {
  Banner2.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.post("/banner2", (req, res) => {
  const { category, imageUrl } = req.body;

  const product = new Banner2({
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

router.delete("/banner2/:banner2Id", (req, res) => {
  const { banner2Id } = req.params;

  // Delete the product with the given productId from the database
  Banner2.findById(banner2Id)
    .then((banner2) => {
      if (!banner2) {
        return res.status(404).json({ error: "Product not found" });
      }

      return Banner2.findByIdAndDelete(banner2Id);
    })
    .then(() => {
      console.log(`Banner with ID ${banner2Id} deleted successfully`);
      res.json({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete Banner", err: err });
    });
});

module.exports = router;
