const express = require("express");
const router = express.Router();
const userProduct = require("../model/userProduct");
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

router.get("/userProduct", (req, res) => {
  userProduct.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.get("/userProduct", (req, res) => {
  userProduct.findById(req.params.id, (err, product) => {
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

router.post("/userProduct", async (req, res) => {
  const {
    productSku,
    productName,
    category,
    subcategory,
    subcategory1,
    price,
    type,
    size,
    stock,
    description,
    imageUrl,
    additional,
    mrp,
    variant,
  } = req.body;
  try {
    let mSku = variant[0].masterSku;
    console.log(mSku);

    // Check if the product with the given productCode already exists
    const allProducts = await userProduct.find({});
    let existingData;

    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].productSku === mSku) {
        console.log("Product already exists.");
        existingData = allProducts[i];
        break;
      }
    }

    if (existingData) {
      // If the product exists, update its variant array
      existingData.variant.push(
        ...variant.map((item) => ({ ...item, masterSku: productSku }))
      );
      await existingData.save();
      res.send("Variant data added to existing product successfully.");
    } else {
      // If the product doesn't exist, create a new product
      product = new userProduct({
        productSku,
        productName,
        category,
        subcategory,
        subcategory1,
        price,
        type,
        size,
        description,
        imageUrl,
        additional,
        stock,
        mrp,
        variant,
      });
      await product.save();
      res.send("Product added successfully.");
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("An error occurred while adding the product.");
  }
});

router.put("/userProduct/:id", (req, res) => {
  const {
    productName,
    category,
    price,
    imageUrl,
    type,
    size,
    subcategory,
    subcategory1,
    stock,
    description,
    additional,
    colors,
    productSku,
    masterSku,
    mrp,
  } = req.body;
  console.log(req.body);
  userProduct.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params.id),
    {
      productName,
      category,
      subcategory,
      subcategory1,
      price,
      type,
      size,
      stock,
      description,

      additional,
      colors,
      productSku,
      masterSku,
      mrp,
      imageUrl,
    },
    (err, product) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the product with id ${req.params.id}.`
          );
      } else {
        res.send("Product updated successfully.");
      }
    }
  );
});

router.delete("/userProduct/:productId", (req, res) => {
  const { productId } = req.params;

  // Delete the product with the given productId from the database
  userProduct
    .findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return userProduct.findByIdAndDelete(productId);
    })
    .then(() => {
      console.log(`Product with ID ${productId} deleted successfully`);
      res.json({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete product", err: err });
    });
});

module.exports = router;
