const express = require("express");
const router = express.Router();
const Item = require("../model/product");
// const { v4: uuidv4 } = require("uuid");

function generateNumericOrderId() {
  const randomNumericId = Math.floor(Math.random() * 100000); // Generate a random numeric ID
  return randomNumericId;
}

router.get("/product", (req, res) => {
  Item.find((err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(products);
    }
  });
});

router.get("/product", (req, res) => {
  Item.findById(req.params.id, (err, product) => {
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

router.post("/product", (req, res) => {
  const {
    productName,
    customerName,
    amount,
    orderDate,
    deliveryDate,
    vendor,
    rating,
    status,
  } = req.body;

  // const orderId = uuidv4(); // Generate a unique order ID using uuidv4
  const orderId = generateNumericOrderId();

  const product = new Item({
    orderId,
    productName,
    customerName,
    amount,
    orderDate,
    deliveryDate,
    vendor,
    rating,
    status,
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

router.put("/product", (req, res) => {
  const {
    orderId,
    productName,
    customerName,
    amount,
    orderDate,
    deliveryDate,
    vendor,
    rating,
    status,
  } = req.body;

  Item.findByIdAndUpdate(
    req.params.id,
    {
      orderId,
      productName,
      customerName,
      amount,
      orderDate,
      deliveryDate,
      vendor,
      rating,
      status,
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

router.delete("/product", (req, res) => {
  Item.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(
          `An error occurred while deleting the product with id ${req.params.id}.`
        );
    } else {
      res.send("Product deleted successfully.");
    }
  });
});

module.exports = router;
