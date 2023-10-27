const express = require("express");
const router = express.Router();
const Different = require("../model/category");

router.get("/category", (req, res) => {
  Different.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.get("/category", (req, res) => {
  Different.findById(req.params.id, (err, product) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the product with id ${req.params.id}.`
        );
    } else {
      res.send(product);
    }
  });
});

router.get("/category/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const count = await Different.countDocuments({ category }); // Assuming you have a 'category' field in your product schema
    res.json({ count });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/category", (req, res) => {
  const { category, subcategory, subcategory1, imageUrl } = req.body;

  // Search for an existing category by name
  Different.findOne({ category }, (err, existingCategory) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send("An error occurred while checking for the category.", err);
    } else if (existingCategory) {
      existingCategory.subcategory = subcategory;
      existingCategory.subcategory1 = subcategory1;
      existingCategory.imageUrl = imageUrl;
      existingCategory.save((err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send("An error occurred while updating the category.", err);
        } else {
          res.send("Category updated successfully.");
        }
      });
    } else {
      // If category doesn't exist, create a new entry
      const product = new Different({
        category,
        subcategory,
        subcategory1,
        imageUrl,
      });

      product.save((err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .send("An error occurred while adding the product.", err);
        } else {
          res.send("Product added successfully.");
        }
      });
    }
  });
});

module.exports = router;
