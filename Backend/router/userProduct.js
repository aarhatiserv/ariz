const express = require("express");
const router = express.Router();
const userProduct = require("../model/userProduct");
const mongoose = require("mongoose");

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
// });
// router.get("/userProduct", (req, res) => {
//   userProduct.find({ isNewArrival: true }, (err, products) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("An error occurred while fetching the products.");
//     } else {
//       res.send(products);
//     }
//   });
// });

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

router.post("/userProduct", (req, res) => {
  const {
    productName,
    category,
    price,
    imageUrl,
    type,
    size,
    stock,
    description,
    publishDate,
    colors,
  } = req.body;

  const product = new userProduct({
    productName,
    category,
    price,
    imageUrl,
    type,
    size,
    description,
    stock,
    publishDate,
    colors,
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

router.put("/userProduct/:id", (req, res) => {
  const {
    productName,
    category,
    price,
    imageUrl,
    type,
    size,
    stock,
    description,
    colors,
    publishDate,
  } = req.body;
  console.log(req.body);
  userProduct.findByIdAndUpdate(
    mongoose.Types.ObjectId(req.params.id), // Parse the id as an ObjectId
    {
      productName,
      category,
      price,
      type,
      size,
      stock,
      description,
      colors,
      publishDate,
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
