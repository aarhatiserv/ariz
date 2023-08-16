const express = require("express");
const router = express.Router();
const Coupon = require("../model/coupon");

// Create a new coupon
router.post("/coupon", (req, res) => {
  const {
    code,
    discount,
    couponTitle,
    productType,
    startDate,
    endDate,
    status,
  } = req.body;

  const coupon = new Coupon({
    code,
    discount,
    couponTitle,
    productType,
    startDate,
    endDate,
    status,
  });

  coupon.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while adding the coupon.");
    } else {
      res.send("Coupon added successfully.");
    }
  });
});

// Get all coupons
router.get("/coupon", (req, res) => {
  Coupon.find((err, coupons) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching the coupons.");
    } else {
      res.send(coupons);
    }
  });
});

// Get a coupon by code
router.get("/coupon/:code", (req, res) => {
  const couponCode = req.params.code;

  Coupon.findOne({ code: couponCode }, (err, coupon) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .send(
          `An error occurred while fetching the coupon with code ${couponCode}.`
        );
    } else {
      if (coupon) {
        res.send(coupon);
      } else {
        res.status(404).send(`Coupon with code ${couponCode} not found.`);
      }
    }
  });
});

// Update a coupon by code
router.put("/coupon/:code", (req, res) => {
  const couponCode = req.params.code;
  const { discount, couponTitle, productType, startDate, endDate, status } =
    req.body;

  Coupon.findOneAndUpdate(
    { code: couponCode },
    {
      discount,
      couponTitle,
      productType,
      startDate,
      endDate,
      status,
    },
    (err, coupon) => {
      if (err) {
        console.error(err);
        res
          .status(500)
          .send(
            `An error occurred while updating the coupon with code ${couponCode}.`
          );
      } else {
        if (coupon) {
          res.send("Coupon updated successfully.");
        } else {
          res.status(404).send(`Coupon with code ${couponCode} not found.`);
        }
      }
    }
  );
});

// Delete a coupon by code
router.delete("/coupon/:couponId", (req, res) => {
  const { couponId } = req.params;

  // Delete the product with the given productId from the database
  Coupon.findById(couponId)
    .then((coupon) => {
      if (!coupon) {
        return res.status(404).json({ error: "Product not found" });
      }

      return Coupon.findByIdAndDelete(couponId);
    })
    .then(() => {
      console.log(`Product with ID ${couponId} deleted successfully`);
      res.json({ message: "Product deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete product", err: err });
    });
});

module.exports = router;
