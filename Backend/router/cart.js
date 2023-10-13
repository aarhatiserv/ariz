const express = require("express");
const router = express.Router();

const Cart = require("../model/cart");
const User = require("../model/User");

router.get("/cart/:id", (req, res) => {
  User.findById(req.params.id, { cart: 1, _id: 0 }, (err, cart) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the cart.");
    } else {
      res.status(200).send(cart);
    }
  });
});

router.get("/cart/:id", (req, res) => {
  User.find((err, cart) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while fetching the products.");
    } else {
      res.send(cart);
    }
  });
});

router.post("/cart/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const { productName, price, imageUrl, productSku, color, size, quantity } =
    req.body;

  const cart = new Cart({
    productName,
    price,
    imageUrl,
    color,
    size,
    productSku,
    quantity,
  });

  User.findOneAndUpdate({ _id: id }, { $push: { cart: cart } }, (err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred while adding the product.");
    } else {
      res.send("Product added successfully.");
    }
  });
});

router.put("/cart/:id", (req, res) => {
  const { productName, price, productSku, color, size, imageUrl } = req.body;

  Cart.findByIdAndUpdate(
    req.params.id,
    {
      productName,
      productSku,
      price,
      color,
      size,
      imageUrl,
    },
    (err, cart) => {
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

router.delete("/cart/:userId/:itemId", (req, res) => {
  const { userId, itemId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Find the index of the cart item in the user's cart array
      const itemIndex = user.cart.findIndex(
        (item) => item._id.toString() === itemId
      );

      if (itemIndex === -1) {
        return res.status(404).json({ error: "Cart item not found" });
      }

      // Remove the item from the cart array
      user.cart.splice(itemIndex, 1);

      // Save the updated user object
      return user.save();
    })
    .then(() => {
      console.log(`Cart item with ID ${itemId} deleted successfully`);
      res.json({ message: "Cart item deleted successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete cart item", err: err });
    });
});

module.exports = router;
